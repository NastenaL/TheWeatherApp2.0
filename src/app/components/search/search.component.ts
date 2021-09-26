import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { SearchCitiesActions } from 'src/app/store/actions/search-cities.actions'

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
    // TODO: Please, provider changeDetectionStrategy
})
export class SearchComponent {

  public readonly searchTermControl: FormControl = new FormControl('');

  constructor(private readonly store: Store) { }

  public getCityByName(): void {
    this.store.dispatch(SearchCitiesActions.Load({ searchTerm: this.searchTermControl.value }));
  }
}
