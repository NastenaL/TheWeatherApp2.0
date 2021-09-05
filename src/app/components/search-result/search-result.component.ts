import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { CityOverviewActions } from 'src/app/store/actions/city-overview.action';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';

@Component({
  selector: 'wa-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent  {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);
  public readonly searchTermControl: FormControl = new FormControl('');
  
  constructor(private readonly store:Store) {}

  public addCooridinates(){
    this.store.dispatch(CityOverviewActions.LoadCity({coordinate: this.searchTermControl.value}));
  }
}
