import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, withLatestFrom } from "rxjs/operators";
import { OpenWeatherService } from "src/app/services/open-weather-app.service";
import { CityOverviewActions } from "../actions/city-overview.actions";
import { cityOverviewSelector } from "../selectors/city-overview.selector";
import { searchCitiesSelector } from "../selectors/search-cities.selectors";

@Injectable()
export class CityOverviewEffects {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

  constructor(private readonly actions$: Actions,
    private readonly openWeatherService: OpenWeatherService,
    private readonly store: Store) { }

  getWeather$ = createEffect(() => this.actions$.pipe(
    ofType(CityOverviewActions.LoadCityId),
    withLatestFrom(this.store.select(cityOverviewSelector.selectCurrentCityCoordinates)),
    mergeMap(([, coordinates]) => {
      return this.openWeatherService.getWeatherByCity(coordinates.lat, coordinates.lon)
        .pipe(
          map(cityOverview => { return CityOverviewActions.LoadWeather({ cityOverview }) })
        );
    }
    )
  )
  );
}