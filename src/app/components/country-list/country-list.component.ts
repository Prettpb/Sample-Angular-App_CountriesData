import { Component, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { CountryListService } from '../../services/country-list.service';

import {MatSort} from '@angular/material/sort';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { Country } from '../../model/country.model';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';
import { ContextMenuComponent } from 'ngx-contextmenu';
import { Router } from '@angular/router';


@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CountryListComponent implements OnInit {

  displayedColumns: string[] = ['flag', 'name', 'alpha2Code',  'callingCodes', 'population', 'capital'];
  dataSource$: MatTableDataSource<Country>;
  deletedColumns: String[] = [];

  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  exportAsConfig: ExportAsConfig = {
    type: 'pdf', // the type you want to download
    elementIdOrContent: 'dataList', // the id of html/table element
  }

  @ViewChild(ContextMenuComponent) public basicMenu: ContextMenuComponent;

  constructor(private countries: CountryListService, private exportAsService: ExportAsService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.countries.getCountries().subscribe(data => {
      this.dataSource$ = new MatTableDataSource<Country>(data);
      this.dataSource$.sort = this.sort;
      this.dataSource$.paginator = this.paginator;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource$.filter = filterValue.trim().toLowerCase();
  }

  export(type) {
    this.exportAsConfig.type = type;
    this.exportAsService.save(this.exportAsConfig, 'Countories').subscribe(() => {
      //exported
    });
  }

  menuHandler() {
    const index = this.displayedColumns.findIndex(item => item == 'flag');
    if (index > -1) {
      this.displayedColumns.splice(index, 1);
    }
  }

  handleContextMenu(event, menu, column?: string) {
    switch(menu) {
      case 'removeColumn':
        const index = this.displayedColumns.findIndex(x => x === event.item.column);
        if (index > -1) {
          this.deletedColumns.push(event.item.column);
          this.displayedColumns.splice(index, 1);
        }
        break;
      case 'addColumn':
        const i = this.deletedColumns.findIndex(x => x == column);
        if (i>-1) {
          this.deletedColumns.splice(i, 1);
          this.displayedColumns.push(column);
        }
        break;
      case 'showMatching':

        break;
    }
  }

  menuClosed() {
    const index = this.displayedColumns.findIndex(item => item === 'flag');
    if (index === -1) {
      this.displayedColumns.unshift('flag');
    }
  }

  showDetails(countryCode) {
    console.log(countryCode);
    //this.router.navigate(['country', countryCode]);
  }

}
