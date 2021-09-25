// TODO: Rename file to .selectors. instead
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Hourly } from 'src/app/components/city-details';
import { CityOverview } from 'src/app/models/city-overview.model';
import * as fromCityOverview from '../reducers/city-overview.reducer';
import { selectRouteParam } from './router.selectors';
import { searchCitiesSelector } from './search-cities.selectors'

const selectFeature = createFeatureSelector<fromCityOverview.State>("cityOverview");

// TODO: Optionally, we could move such selectors into router.selectors file
const selectCityId = selectRouteParam("id");

const selectCurrentCity = createSelector(selectCityId, searchCitiesSelector.selectCities, (cityId, cities) => {
  return cities.find((city) => city.id === parseInt(cityId!));
});

const selectCurrentCityCoordinates = createSelector(selectCurrentCity, 
  // TODO: Please, make sure that names in parameters are match to related selector
  // Ex. selectCurrentCity -> currentCity
  (city) => {
    // TODO: Please, check if we can use model instead
  return { lat: city?.latitude ?? 0, lon: city?.longitude ?? 0 }
});

// TODO: Please, make sure that selected entity name matches to selector name
// Ex: selectCityId at current case
// TODO: Please, check usage of this selector, since we can take city id from selectRouteParam("id") selector
const selectCity = createSelector(
  selectFeature,
  (state) => state.cityId
);

// Please, rename according to selected entity
const selectWeather = createSelector(
  selectFeature,
  (state) => state.weatherResponse
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
    // TODO: Please, check ?? operator here
    if (cityOverview) {
      return cityOverview.hourly;
    }
    return {} as Hourly[];
  }
);

// TODO: Please, remove unused selectors here 
// The selectCity and selectWeather aren't used in outer files
export const cityOverviewSelector = { selectCity, selectWeather, selectCurrentCityCoordinates, selectCityOverview, selectCityDetailHourly };
