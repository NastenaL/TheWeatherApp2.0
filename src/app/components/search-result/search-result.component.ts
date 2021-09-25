import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
    // TODO: Please, provider changeDetectionStrategy
})
export class SearchResultComponent {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

  // TODO: Move this logic into selector
  public isEmpty$ = this.cities$.pipe(
    map(item => item.length > 0),
    // TODO: Please, check usage such operator and ensure that we setup cities$ correctly  
    defaultIfEmpty(false)
  );

  constructor(private readonly store: Store) { }
}
