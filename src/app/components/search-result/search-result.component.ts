import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

  constructor(private readonly store: Store) { }
}
