import { createAction, props } from "@ngrx/store";
import { City } from "../../interfaces/city.interface";

// TODO: Please, use lowerCamelCase for non constant variables
const Load = createAction(
    // TODO: Please, make sure that we use same [Module Feature] name across the actions within one file
    '[Search cities] load',
    props<{ searchTerm: string }>()
);

const LoadSuccess = createAction(
    '[Search cities] load success',
    props<{ cities: City[] }>()
);

export const SearchCitiesActions = { Load, LoadSuccess };