import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityOverviewActions } from 'src/app/store/actions/city-overview.actions';
import { cityOverviewSelector } from 'src/app/store/selectors/city-overview.selector';

@Component({
  selector: 'wa-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit {
  public readonly weather$ = this.store.select(cityOverviewSelector.selectWeather);

  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.store.dispatch(CityOverviewActions.LoadCityId());
  }
}
