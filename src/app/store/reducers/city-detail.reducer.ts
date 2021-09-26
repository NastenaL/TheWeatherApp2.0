import { Action, createReducer, on } from '@ngrx/store';
import { CityDetail } from 'src/app/models/city-detail.model';
import { CityDetailsActions } from '../actions/city-detail.actions';

export interface State {
    cityDetail: CityDetail | undefined;
}

export const initialState: State = {
    cityDetail: undefined
};

// TODO: Please, check naming according to feature name
const cityOverviewReducer = createReducer(
    initialState,
    on(CityDetailsActions.LoadSuccess, (state, { cityDetail }) => ({ ...state, cityDetail: cityDetail }))
);

export function reducer(state: State | undefined, action: Action): State {
    return cityOverviewReducer(state, action);
}