import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityDetail } from 'src/app/models/city-detail.model';
import { CityDetailsActions } from 'src/app/store/actions/city-detail.actions';
import { cityOverviewSelector } from 'src/app/store/selectors/city-overview.selector';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {

  public readonly weather$ = this.store.select(cityOverviewSelector.selectWeather);
  public cityWeather: CityDetail | undefined = undefined;

  constructor(private readonly store: Store) { }

  ngOnInit(): void {
    this.weather$.forEach(item => {
      if (item != undefined) {
        this.cityWeather = new CityDetail(item.hourly);
        console.log(this.cityWeather);
      }
    });

  }

}
