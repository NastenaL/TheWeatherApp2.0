import { Action, createReducer, on } from '@ngrx/store';
import { CityOverview } from '../interfaces/city-overview.interface';
import { Coordinate } from '../interfaces/coordinate.interface';
import {CityOverviewActions} from './actions/city-overview.action';

export interface State {
    cityOverview: CityOverview | undefined;
    coordinate: Coordinate | undefined;
  }

export const initialState: State = {
    cityOverview: undefined,
    coordinate: undefined
  };
 
const cityOverviewReducer = createReducer(
    initialState,
    on(CityOverviewActions.LoadCity, (state, {coordinate})  => ({ ...state, coordinate: coordinate})),
    on(CityOverviewActions.LoadWeather, (state, { cityOverview }) => ({ ...state, cityOverview :cityOverview }))
  );

export function reducer(state: State | undefined, action: Action) : State {
    return cityOverviewReducer(state, action);
  }