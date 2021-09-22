import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityDetail, cityOverviewSelector, Hourly } from './index'

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  public readonly weather$ = this.store.select(cityOverviewSelector.selectWeather);
  public cityWeather: CityDetail | undefined = undefined;
  public hourlyWeather: Hourly[] | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.weather$.forEach(item => {
      if (item != undefined) {
        this.cityWeather = new CityDetail(item.hourly);
      }
    });
    this.hourlyWeather = this.cityWeather?.hourly;
  }
}
