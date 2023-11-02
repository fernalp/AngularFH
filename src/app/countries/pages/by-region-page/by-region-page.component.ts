import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';


@Component({
  selector: 'countries-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit {

  public regions: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"]
  public countries: Country[] = [];
  public selectedRegion?: Region;
  public isLoading: boolean = false;

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byRegion.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegion.region;
  }

  onSearchByRegion(value: Region) {
    this.isLoading = true;
    this.selectedRegion = value;
    this.countriesService.onSearchByRegion(value).subscribe(
      (countries) => {
        this.countries = countries;
        this.isLoading = false;
      }
    )

  }
}
