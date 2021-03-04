import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryListComponent } from './components/country-list/country-list.component';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';

import {TableVirtualScrollModule} from 'ng-table-virtual-scroll';
import { ExportAsModule } from 'ngx-export-as';
import { ContextMenuModule } from 'ngx-contextmenu';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    CountryListComponent,
    CountryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    TableVirtualScrollModule,
    ExportAsModule,
    ContextMenuModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatMenuModule,
    MatDividerModule,
    RouterModule,
    MatCardModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
