import { Component, EventEmitter, Output } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {


  public countries: Country[] = [];

  constructor(
    private countriesService: CountriesService
  ) { }

  onSearchByCapital(value: string) {
    this.countriesService.onSearchByCapital(value).subscribe(
      (countries) => this.countries = countries
    )

  }
}
