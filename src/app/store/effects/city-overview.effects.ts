import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { map, mergeMap } from "rxjs/operators";
import { City } from "src/app/interfaces/city.interface";
import { OpenWeatherService } from "src/app/services/open-weather-app.service";
import { CityOverviewActions } from "../actions/city-overview.actions";
import { searchCitiesSelector } from "../selectors/search-cities.selectors";

@Injectable()
export class CityOverviewEffects{
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);

constructor(private readonly actions$: Actions, private readonly openWeatherService : OpenWeatherService, private readonly store: Store){}

getWeather$ = createEffect(() => this.actions$.pipe(
    ofType(CityOverviewActions.LoadCity),
    mergeMap((props) =>
    {
      let selectedCity: City | undefined = undefined; 
      this.cities$.subscribe((items: City[]) =>{
        selectedCity = items.find(i => i.id === props.cityId);
      });
      
      return this.openWeatherService.getWeatherByCity(selectedCity!.latitude, selectedCity!.longitude)
      .pipe(
        map(cityOverview => { return CityOverviewActions.LoadWeather({cityOverview})})
      );
    }
      )
    )
  );
}