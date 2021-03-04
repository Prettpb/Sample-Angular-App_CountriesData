import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from '../../assets/api.config';
import { Country } from '../model/country.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor(private http: HttpClient) { }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(API.GET_CONTRIES);
  }

  getCountryDetail(code): Observable<Country[]> {
    return this.http.get<Country[]>(API.GET_COUNTRY_DETAIL + code);
  }
}
