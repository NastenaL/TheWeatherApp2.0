import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSearchCities from  '../search-cities.reducer';

const selectFeature = createFeatureSelector<fromSearchCities.State>("searchCities");
 
const selectCities = createSelector(
  selectFeature,
  (state) => state.cities.slice(0,15)
);
export const searchCitiesSelector = {selectCities};
