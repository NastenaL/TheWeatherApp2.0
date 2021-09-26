import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { cityOverviewSelector } from './index'

@Component({
  selector: 'app-city-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent {
  public readonly hourlyWeathers$ = this.store.select(cityOverviewSelector.selectCityDetailHourly);

  constructor(private readonly store: Store) { }
}
