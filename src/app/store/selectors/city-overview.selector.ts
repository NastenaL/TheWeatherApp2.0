import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hourly } from 'src/app/components/city-details';
import { CityOverview } from 'src/app/models/city-overview.model';
import * as fromCityOverview from '../reducers/city-overview.reducer';
import { selectRouteParam } from './router.selectors';
import { searchCitiesSelector } from './search-cities.selectors'

const selectFeature = createFeatureSelector<fromCityOverview.State>("cityOverview");

const selectCityId = selectRouteParam("id");

const selectCurrentCity = createSelector(selectCityId, searchCitiesSelector.selectCities, (cityId, cities) => {
  return cities.find((city) => city.id === parseInt(cityId!));
});

const selectCurrentCityCoordinates = createSelector(selectCurrentCity, (city) => {
  return { lat: city?.latitude ?? 0, lon: city?.longitude ?? 0 }
});

const selectCity = createSelector(
  selectFeature,
  (state) => state.cityId
);

const selectWeather = createSelector(
  selectFeature,
  (state) => state.cityOverview
);

const selectCityOverview = createSelector(
  selectWeather,
  selectCity,
  (cityOverview, cityId) => {
    if (cityOverview) {
      return new CityOverview(
        cityId,
        cityOverview);
    }
    return {} as CityOverview;
  }
);

const selectCityDetailHourly = createSelector(
  selectWeather,
  selectCity,
  (cityOverview, cityId) => {
    if (cityOverview) {
      return cityOverview.hourly;
    }
    return {} as Hourly[];
  }
);

export const cityOverviewSelector = { selectCity, selectWeather, selectCurrentCityCoordinates, selectCityOverview, selectCityDetailHourly };
