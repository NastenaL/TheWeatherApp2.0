import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromSearchCities from '../reducers/search-cities.reducer';

const selectFeature = createFeatureSelector<fromSearchCities.State>("searchCities");

const selectCities = createSelector(
  selectFeature,
  (state) => {
    return state.cities.slice(0, 15)
  }
);
export const searchCitiesSelector = { selectCities };
