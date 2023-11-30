import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Hero } from '../../interfaces/hero.interface';
import { HeroService } from '../../services/hero.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public selectedHero?: Hero;

  public heroes: Hero[] = []

  constructor(
    private heroService: HeroService
  ) { }

  searchHero() {
    const value: string = this.searchInput.value || '';
    this.heroService.getSuggestions(value).subscribe((heroes) => {
      this.heroes = heroes;
    });
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    this.selectedHero = event.option.value as Hero;

    this.searchInput.setValue(this.selectedHero.superhero)
  }

}
