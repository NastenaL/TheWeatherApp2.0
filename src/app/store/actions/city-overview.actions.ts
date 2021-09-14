import { createAction, props } from "@ngrx/store";
import { City } from "src/app/interfaces/city.interface";
import { CityOverview } from "../../interfaces/city-overview.interface";

const LoadCity = createAction(
    '[City] load',
    props<{city: City}>()
);

const LoadWeather  = createAction(
    '[City overview] get success',
    props<{cityOverview: CityOverview}>()
);

export const CityOverviewActions = {LoadWeather, LoadCity};