import { createAction, props } from "@ngrx/store";
import { CityOverview } from "../../interfaces/city-overview.interface";

const Load = createAction(
    '[CityId] load'
);

const LoadSuccess = createAction(
    '[City overview] load success',
    props<{ cityOverview: CityOverview }>()
);

export const CityOverviewActions = { LoadSuccess, Load };