import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CityOverviewActions } from 'src/app/store/actions/city-overview.actions';
import { cityOverviewSelector } from 'src/app/store/selectors/city-overview.selector';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';

@Component({
  selector: 'wa-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit{
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);
  public readonly weather$ = this.store.select(cityOverviewSelector.selectWeather);
  private selectedItemId: number = 0;

  constructor(private readonly store: Store, private route: ActivatedRoute) {}

  ngOnInit() { 
    this.store.dispatch(CityOverviewActions.LoadCityId());

   }
}
