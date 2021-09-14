import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCityOverview from  '../reducers/city-overview.reducer';

const selectFeature = createFeatureSelector<fromCityOverview.State>("cityOverview");
 
const selectCoordinates = createSelector(
  selectFeature,
  (state) => state.city
);
export const cityOverviewSelector = {selectCoordinates};
