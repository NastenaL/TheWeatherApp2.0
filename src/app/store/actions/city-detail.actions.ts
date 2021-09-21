import { createAction, props } from "@ngrx/store";
import { CityDetail } from "src/app/models/city-detail.model";

const LoadSuccess = createAction(
    '[City detail] load success',
    props<{ cityDetail: CityDetail }>()
);

export const CityDetailsActions = { LoadSuccess };