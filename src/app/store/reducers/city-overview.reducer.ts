import { Action, createReducer, on } from '@ngrx/store';
import { WeatherResponse } from 'src/app/interfaces/weather-response/weather-response.interface';
import { CityOverviewActions } from '../actions/city-overview.actions';

export interface State {
  weatherResponse: WeatherResponse | undefined;
  cityId: number;
}

export const initialState: State = {
  weatherResponse: undefined,
  cityId: 0
};

const cityOverviewReducer = createReducer(
  initialState,
  on(CityOverviewActions.Load, (state) => ({ ...state })),
  on(CityOverviewActions.LoadSuccess, (state, { weatherResponse }) => ({ ...state, weatherResponse: weatherResponse }))
);

export function reducer(state: State | undefined, action: Action): State {
  return cityOverviewReducer(state, action);
}