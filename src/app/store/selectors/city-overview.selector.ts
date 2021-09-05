import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCityOverview from  '../city-overview.reducer';

const selectFeature = createFeatureSelector<fromCityOverview.State>("cityOverview");
 
const selectCoordinates = createSelector(
  selectFeature,
  (state) => state.coordinate?.lat
);
export const cityOverviewSelector = {selectCoordinates};
