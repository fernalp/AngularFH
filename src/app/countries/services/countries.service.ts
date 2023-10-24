import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, of, map } from 'rxjs';
import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  constructor(private http: HttpClient) {

  }

  public inputSearch: string = "";

  private searchCountries(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(catchError(() => of([])));
  }

  onSearchCountryByAlphaCode(alphaCode: string): Observable<Country | null> {
    const url: string = `${this.apiUrl}/alpha/${alphaCode}`;
    return this.http.get<Country[]>(url)
      .pipe(
        map((countries) => countries.length === 0 ? null : countries[0]),
        catchError(() => of(null))
      );
  }

  onSearchByCapital(capital: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/capital/${capital}`;
    return this.searchCountries(url);
  }

  onSearchByCountry(country: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${country}`;
    return this.searchCountries(url);
  }

  onSearchByRegion(region: string) {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.searchCountries(url);
  }

}
