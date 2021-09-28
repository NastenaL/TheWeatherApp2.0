import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CityOverviewActions, cityOverviewSelector } from 'src/app/store';
import { LocalTime } from 'src/app/util/clock.util';

@Component({
  selector: 'app-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit {
  public cityWeather$ = this.store.select(cityOverviewSelector.selectCityOverview);

  constructor(private readonly store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    this.store.dispatch(CityOverviewActions.Load());
    LocalTime.loadClock();
  }

  ngOnDestroy() {
    LocalTime.deleteClock();
  }
}
