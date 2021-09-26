import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap, withLatestFrom } from "rxjs/operators";
import { OpenWeatherService } from "src/app/services/open-weather-app.service";
import { CityOverviewActions } from "../actions/city-overview.actions";
// TODO:Please, use barrel file instead
import { cityOverviewSelector } from "../selectors/city-overview.selector";
import { searchCitiesSelector } from "../selectors/search-cities.selectors";

@Injectable()
export class CityOverviewEffects {
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

  constructor(private readonly actions$: Actions,
    private readonly openWeatherService: OpenWeatherService,
    private readonly store: Store) { }

  // TODO: Same comments as for SearchCitiesEffects
  getWeather$ = createEffect(() => this.actions$.pipe(
    ofType(CityOverviewActions.Load),
    withLatestFrom(this.store.select(cityOverviewSelector.selectCurrentCityCoordinates)),
    mergeMap(([, coordinates]) => {
      // TODO:Please, check if we can pass coordinates as whole model instead 
      return this.openWeatherService.getWeatherByCity(coordinates.lat, coordinates.lon)
        .pipe(
          map(weatherResponse => { return CityOverviewActions.LoadSuccess({ weatherResponse }) })
        );
    }
    )
  )
  );
}