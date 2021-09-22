import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CityOverview, CityOverviewActions, cityOverviewSelector, LocalTime } from './index'

@Component({
  selector: 'app-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit {
  public readonly weather$ = this.store.select(cityOverviewSelector.selectWeather);
  public cityWeather: CityOverview | undefined = undefined;

  constructor(private readonly store: Store, private route: ActivatedRoute) { }

  ngOnInit() {
    let currentCityId = 0;
    this.route.params.subscribe(params => {
      currentCityId = parseInt(params['id'])
    });

    this.store.dispatch(CityOverviewActions.Load());

    this.weather$.forEach(item => {
      if (item != undefined) {
        this.cityWeather = new CityOverview(currentCityId, item.lat, item.lon, item.timezone_offset,
          item.current.feels_like, item.current.humidity, item.current.uvi, item.current.visibility,
          item.current.pressure, item.current.dew_point, item.current.weather[0], item.current.wind_speed,
          item.current.wind_deg, item.current.temp);
      }
    });
    LocalTime.loadClock();
  }

  ngOnDestroy() {
    LocalTime.deleteClock();
  }
}
