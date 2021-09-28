import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { cityOverviewSelector } from 'src/app/store';

@Component({
  selector: 'app-city-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent {
  public readonly hourlyWeathers$ = this.store.select(cityOverviewSelector.selectCityDetailHourly);
  public isEmpty$ = this.hourlyWeathers$.pipe(
    map(item => item.length > 0)
  );

  constructor(private readonly store: Store) { }
}
