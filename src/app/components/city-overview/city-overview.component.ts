import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CityOverviewActions, cityOverviewSelector, LocalTime } from './index'

@Component({
  selector: 'app-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
  // TODO: Please, provider changeDetectionStrategy
})
export class CityOverviewComponent implements OnInit {
  // TODO: Please, check if we can add readonly here
  public cityWeather$ = this.store.select(cityOverviewSelector.selectCityOverview);

  constructor(private readonly store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(CityOverviewActions.Load());
    // TODO: Please, check usage
    LocalTime.loadClock();
  }

  ngOnDestroy() {
    LocalTime.deleteClock();
  }
}
