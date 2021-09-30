import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { CityOverviewActions, cityOverviewSelector } from 'src/app/store';

@Component({
  selector: 'app-city-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-overview-container.component.html',
  styleUrls: ['./city-overview-container.component.css']
})
export class CityOverviewComponent implements OnInit {
  public readonly cityWeather$ = this.store.select(cityOverviewSelector.selectCityOverview);

  constructor(private readonly store: Store) { }

  ngOnInit() {
    this.store.dispatch(CityOverviewActions.Load());
  }
}
