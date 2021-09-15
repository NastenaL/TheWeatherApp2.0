import { createAction, props } from "@ngrx/store";
import { CityOverview } from "../../interfaces/city-overview.interface";

const LoadCityId = createAction(
    '[CityId] load'
);

const LoadWeather = createAction(
    '[City overview] get success',
    props<{ cityOverview: CityOverview }>()
);

export const CityOverviewActions = { LoadWeather, LoadCityId };