import { createAction, props } from "@ngrx/store";
import { WeatherResponse } from "src/app/interfaces/weather-response/weather-response.interface";

const Load = createAction(
    '[CityId] load'
);

const LoadSuccess = createAction(
    '[City overview] load success',
    props<{ cityOverview: WeatherResponse }>()
);

export const CityOverviewActions = { LoadSuccess, Load };