import { createAction, props } from "@ngrx/store";
import { CityOverview } from "../../interfaces/city-overview.interface";

const GetCoordinates = createAction(
    '[City] coordinates',
    props<{lat: number, lon: number}>()
);

const GetWether  = createAction(
    '[City overview] get success',
    props<{cityOverview: CityOverview}>()
);

export const CityOverviewActions = {GetWether, GetCoordinates};