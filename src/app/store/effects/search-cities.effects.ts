import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { GeoDBService } from "src/app/services/geo-db.service";
import { SearchCitiesActions } from "../actions/search-cities.actions";

@Injectable()
export class SearchCitiesEffects {

  constructor(private readonly actions$: Actions, private readonly geoDbService: GeoDBService) { }

  // Please, use access modifiers
  // Please, check if we we can use readonly here
  load$ = createEffect(() => this.actions$.pipe(
    ofType(SearchCitiesActions.Load),
    // Please, check if we can use switchMap here
    mergeMap((props) => this.geoDbService.getCityByName(props.searchTerm)
      .pipe(
        // TODO: Please, add error handling
        map(cities => {
          return SearchCitiesActions.LoadSuccess({ cities })
        })
      ))
  ));
}