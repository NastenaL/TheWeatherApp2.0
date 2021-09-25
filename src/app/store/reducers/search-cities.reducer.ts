import { Action, createReducer, on } from '@ngrx/store';
import { City } from '../../interfaces/city.interface';
import { SearchCitiesActions } from '../actions/search-cities.actions';

export interface State {
  // TODO: Please, usage and remove if we don't need it
  searchTerm: string;
  cities: City[];
}

export const initialState: State = {
  searchTerm: "",
  cities: []
};

const searchCitiesReducer = createReducer(
  initialState,
    // TODO: We can use object property assign shortcut here { searchTerm }, etc.
  on(SearchCitiesActions.Load, (state, { searchTerm }) => ({ ...state, searchTerm: searchTerm })),
  on(SearchCitiesActions.LoadSuccess, (state, { cities }) => ({ ...state, cities: cities }))
);

export function reducer(state: State | undefined, action: Action): State {
  return searchCitiesReducer(state, action);
}