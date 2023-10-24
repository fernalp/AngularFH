import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-table',
  templateUrl: './countries-table.component.html',
  styles: [
  ]
})
export class CountriesTableComponent {

  @Input()
  public countries: Country[] = [];

}
