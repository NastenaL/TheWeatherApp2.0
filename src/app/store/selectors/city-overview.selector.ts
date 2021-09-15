import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromCityOverview from  '../reducers/city-overview.reducer';
import {selectRouteParam} from './router.selectors';
import {searchCitiesSelector} from './search-cities.selectors'

const selectFeature = createFeatureSelector<fromCityOverview.State>("cityOverview");
 
const selectCityId = selectRouteParam("id");

const selectCurrentCity = createSelector(selectCityId, searchCitiesSelector.selectCities, (cityId, cities) => {
  return cities.find((city) => city.id === parseInt(cityId!));
});

const selectCurrentCityCoordinates = createSelector(selectCurrentCity, (city) => {
return {lat: city?.latitude ?? 0, lon:city?.longitude ?? 0}});

const selectCity = createSelector(
  selectFeature,
  (state) => state.cityId
);

const selectWeather = createSelector(
    selectFeature,
    (state) => state.cityOverview
  );
export const cityOverviewSelector = {selectCity, selectWeather, selectCurrentCityCoordinates};
