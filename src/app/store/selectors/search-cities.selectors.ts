import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromSearchCities from  '../search-cities.reducer';

const selectFeature = createFeatureSelector<fromSearchCities.State>("searchCities");
 
const selectCities = createSelector(
  selectFeature,
  (state) => state.cities
);
export const searchCitiesSelector = {selectCities};
