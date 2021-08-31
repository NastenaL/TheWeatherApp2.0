import * as fromRouterStore from "@ngrx/router-store";
import { ActionReducerMap } from "@ngrx/store";
import * as fromSearchCities from  './search-cities.reducer';

interface State {
    router: fromRouterStore.RouterReducerState, 
    searchCities: fromSearchCities.State
}

export const actionReducerMap : ActionReducerMap<State> = {
    router: fromRouterStore.routerReducer,
    searchCities: fromSearchCities.reducer
};