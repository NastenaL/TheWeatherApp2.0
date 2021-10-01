import { getSelectors } from '@ngrx/router-store';

const selectors = getSelectors();
export const { selectRouteParam } = selectors;