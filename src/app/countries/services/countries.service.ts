import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, catchError, of, map, delay, tap } from 'rxjs';
import { Country } from '../interfaces/country.interface';
import { CacheStore } from '../interfaces/cache-store.interface';
import { Region } from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {

  private apiUrl: string = "https://restcountries.com/v3.1";

  public cacheStore: CacheStore = {
    byCapital: {
      term: "",
      countries: []
    },
    byCountry: {
      term: "",
      countries: []
    },
    byRegion: {
      region: "",
      countries: []
    },
  }

  constructor(private http: HttpClient) {
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem("cacheStore", JSON.stringify(this.cacheStore));
  }

  private loadFromLocalStorage() {
    if (!localStorage.getItem("cacheStore")) {
      return;
    }
    this.cacheStore = JSON.parse(localStorage.getItem("cacheStore")!)
  }

  private getCountriesRequest(url: string): Observable<Country[]> {
    return this.http.get<Country[]>(url)
      .pipe(
        catchError(() => of([])),
        delay(10)
      );
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
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCapital = { term: capital, countries }),
        tap(() => { this.saveToLocalStorage() })
      );
  }

  onSearchByCountry(country: string): Observable<Country[]> {
    const url: string = `${this.apiUrl}/name/${country}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byCountry = { term: country, countries }),
        tap(() => { this.saveToLocalStorage() })
      );
  }

  onSearchByRegion(region: Region) {
    const url: string = `${this.apiUrl}/region/${region}`;
    return this.getCountriesRequest(url)
      .pipe(
        tap(countries => this.cacheStore.byRegion = { region, countries }),
        tap(() => { this.saveToLocalStorage() })
      );;
  }

}
