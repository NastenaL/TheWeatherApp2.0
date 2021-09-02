import { Action, createReducer, on } from '@ngrx/store';
import { CityOverview } from '../interfaces/city-overview.interface';
import {CityOverviewActions} from './actions/city-overview.action';

export interface State {
    cityOverview: CityOverview | undefined;
  }

export const initialState: State = {
    cityOverview: undefined
  };

const cityOverviewReducer = createReducer(
    initialState,
    on(CityOverviewActions.GetWether, (state, { cityOverview }) => ({ ...state, cityOverview :cityOverview }))
  );

export function reducer(state: State | undefined, action: Action) : State {
    return cityOverviewReducer(state, action);
  }