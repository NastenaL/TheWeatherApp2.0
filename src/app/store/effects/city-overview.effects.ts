import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { OpenWeatherService } from "src/app/services/open-weather-app.service";
import { CityOverviewActions } from "../actions/city-overview.actions";

@Injectable()
export class CityOverviewEffects{

constructor(private readonly actions$: Actions, private readonly openWeatherService : OpenWeatherService){}

getWeather$ = createEffect(() => this.actions$.pipe(
    ofType(CityOverviewActions.LoadCity),
    mergeMap((props) => this.openWeatherService.getWeatherByCity(props.city.latitude, props.city.longitude)
      .pipe(
        map(cityOverview => { return CityOverviewActions.LoadWeather({cityOverview})})
      ))
    )
  );
}