import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cityOverviewSelector } from './index'

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
  public hourlyWeather$ = this.store.select(cityOverviewSelector.selectCityDetailHourly);

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
  }
}
