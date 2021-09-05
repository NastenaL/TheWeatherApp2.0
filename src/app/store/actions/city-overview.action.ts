import { createAction, props } from "@ngrx/store";
import { Coordinate } from "src/app/interfaces/coordinate.interface";
import { CityOverview } from "../../interfaces/city-overview.interface";

const LoadCity = createAction(
    '[City] coordinates',
    props<{coordinate: Coordinate}>()
);

const LoadWeather  = createAction(
    '[City overview] get success',
    props<{cityOverview: CityOverview}>()
);

export const CityOverviewActions = {LoadWeather, LoadCity};