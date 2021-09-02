import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';
import { Router } from '@angular/router';
import { City } from 'src/app/interfaces/city.interface';
import { OpenWeatherService } from 'src/app/services/open-weather-app.service';

@Component({
  selector: 'wa-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent  {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

  constructor(private readonly store:Store, private readonly service: OpenWeatherService) {}

  navigate() {
    console.log(this.service.getWeatherByCity(51.507222222, -0.1275));
}
}
