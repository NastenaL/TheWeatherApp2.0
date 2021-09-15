import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCityOverview from  '../reducers/city-overview.reducer';

const selectFeature = createFeatureSelector<fromCityOverview.State>("cityOverview");
 
const selectCity = createSelector(
  selectFeature,
  (state) => state.cityId
);

const selectWeather = createSelector(
    selectFeature,
    (state) => state.cityOverview
  );
export const cityOverviewSelector = {selectCity, selectWeather};
