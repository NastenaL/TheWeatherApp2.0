import { createFeatureSelector, createSelector } from '@ngrx/store';
import { cityOverviewSelector } from 'src/app/components/city-overview';
import * as fromCityDetail from '../reducers/city-detail.reducer';
import { selectRouteParam } from './router.selectors';
import { searchCitiesSelector } from './search-cities.selectors'

const selectFeature = createFeatureSelector<fromCityDetail.State>("cityDetail");

const selectHourly = createSelector(
    selectFeature,
    (state) => {
        state.cityDetail?.hourly
    }
);

export const cityDetailSelector = { selectHourly };
