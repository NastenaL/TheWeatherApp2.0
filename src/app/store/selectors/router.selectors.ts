import { getSelectors } from '@ngrx/router-store';

const selectors = getSelectors();
console.log(selectors);
export const { selectRouteParam } = selectors;