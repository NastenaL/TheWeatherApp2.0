import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { OpenWeatherService } from "src/app/services/open-weather-app.service";
import { CityOverviewActions } from "../actions/city-overview.action";

@Injectable()
export class CityOverviewEffects{

constructor(private readonly actions$: Actions, private readonly openWeatherService : OpenWeatherService){}

getWeather$ = createEffect(() => this.actions$.pipe(
    ofType(CityOverviewActions.GetCoordinates),
    mergeMap((props) => this.openWeatherService.getWeatherByCity(props.lat, props.lon)
      .pipe(
        map(cityOverview => { return CityOverviewActions.GetWether({cityOverview})})
      ))
    )
  );
}