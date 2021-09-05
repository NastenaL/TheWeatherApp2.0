import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { cityOverviewSelector } from 'src/app/store/selectors/city-overview.selector';

@Component({
  selector: 'wa-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent {

  public readonly coords = this.store.select(cityOverviewSelector.selectCoordinates);

  constructor(private readonly store: Store) {
    console.log("coords"+this.coords);
  }

}
