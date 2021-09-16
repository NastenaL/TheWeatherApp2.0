import { Action, createReducer, on } from '@ngrx/store';
import { CityOverview } from '../../interfaces/city-overview.interface';
import { CityOverviewActions } from '../actions/city-overview.actions';

export interface State {
  cityOverview: CityOverview | undefined;
  cityId: number;
}

export const initialState: State = {
  cityOverview: undefined,
  cityId: 0
};

const cityOverviewReducer = createReducer(
  initialState,
  on(CityOverviewActions.Load, (state) => ({ ...state })),
  on(CityOverviewActions.LoadSuccess, (state, { cityOverview }) => ({ ...state, cityOverview: cityOverview }))
);

export function reducer(state: State | undefined, action: Action): State {
  return cityOverviewReducer(state, action);
}