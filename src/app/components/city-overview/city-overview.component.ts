import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CityOverviewActions, cityOverviewSelector, LocalTime } from './index'

@Component({
  selector: 'app-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit {
  public cityWeather$ = this.store.select(cityOverviewSelector.selectCityOverview);

  constructor(private readonly store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    let currentCityId = 0;
    this.route.params.subscribe(params => {
      currentCityId = parseInt(params['id'])
    });

    this.store.dispatch(CityOverviewActions.Load());
    LocalTime.loadClock();
  }

  ngOnDestroy() {
    LocalTime.deleteClock();
  }
}
