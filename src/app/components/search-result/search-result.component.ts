import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { defaultIfEmpty, map } from 'rxjs/operators';
import { City } from 'src/app/interfaces/city.interface';
import { Coordinate } from 'src/app/interfaces/coordinate.interface';
import { CityOverviewActions } from 'src/app/store/actions/city-overview.actions';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';

@Component({
  selector: 'wa-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

  public isEmpty$ = this.cities$.pipe(
    map(item => item.length > 0),
    defaultIfEmpty(false)
  );

  constructor(private readonly store: Store) { }
}
