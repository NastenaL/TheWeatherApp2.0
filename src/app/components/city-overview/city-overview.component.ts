import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityOverview } from 'src/app/interfaces/city-overview.interface';
import { CityOverviewActions } from 'src/app/store/actions/city-overview.actions';
import { cityOverviewSelector } from 'src/app/store/selectors/city-overview.selector';

@Component({
  selector: 'wa-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit {
  public readonly weather$ = this.store.select(cityOverviewSelector.selectWeather);
  public cityWeather: CityOverview | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.store.dispatch(CityOverviewActions.Load());
    this.weather$.forEach(item => {
      if (item != undefined) {
        this.cityWeather = new CityOverview(item.id, item.localTime, item.lat, item.lon, item.timezone_offset,
          item.description, item.feelsLike, item.humidity, item.uvIndex, item.visibility, item.pressure, item.dewPoint);
      }
    });
  }
}
