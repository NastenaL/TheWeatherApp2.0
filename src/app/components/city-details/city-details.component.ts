import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cityOverviewSelector } from 'src/app/store';

@Component({
  selector: 'app-city-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent {
  public readonly hourlyWeatherDatas$ = this.store.select(cityOverviewSelector.selectCityDetailHourly);

  constructor(private readonly store: Store) { }
}
