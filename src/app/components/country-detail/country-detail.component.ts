import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryListService } from 'src/app/services/country-list.service';
import { Country} from '../../model/country.model';

@Component({
  selector: 'app-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss']
})
export class CountryDetailComponent implements OnInit {

  title: string;
  country: Country; 

  constructor( private route: ActivatedRoute, private countryService: CountryListService) { 
    this.country = {
      name: ''
    }
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.title = params.get('id');

      this.countryService.getCountryDetail(this.title).subscribe(data => {
        if (data && data.length)
          this.country = data[0];
      });

    });

  }

}
