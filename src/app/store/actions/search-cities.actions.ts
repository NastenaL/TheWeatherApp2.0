import { createAction, props } from "@ngrx/store";
import { City } from "../../interfaces/city.interface";

const Load = createAction(
    '[Search cities] load',
    props<{ searchTerm: string }>()
);

const LoadSuccess = createAction(
    '[Search cities] load success',
    props<{ cities: City[] }>()
);

export const SearchCitiesActions = { Load, LoadSuccess };