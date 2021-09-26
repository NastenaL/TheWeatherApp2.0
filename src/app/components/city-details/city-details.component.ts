import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cityOverviewSelector } from './index'

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
  // TODO: Please, provider changeDetectionStrategy
})
export class CityDetailsComponent implements OnInit {
  // TODO: Please, check if we can add readonly here
  public hourlyWeather$ = this.store.select(cityOverviewSelector.selectCityDetailHourly);

  constructor(private readonly store: Store) { }

  // TODO: Please, check usage and remove
  ngOnInit(): void {
  }
}
