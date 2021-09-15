import { Action, createReducer, on } from '@ngrx/store';
import { City } from 'src/app/interfaces/city.interface';
import { CityOverview } from '../../interfaces/city-overview.interface';
import {CityOverviewActions} from '../actions/city-overview.actions';

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
    on(CityOverviewActions.LoadCityId, (state, {cityId})  => ({ ...state, cityId: cityId})),
    on(CityOverviewActions.LoadWeather, (state, { cityOverview }) => ({ ...state, cityOverview :cityOverview }))
  );

export function reducer(state: State | undefined, action: Action) : State {
    return cityOverviewReducer(state, action);
  }