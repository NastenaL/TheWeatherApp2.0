import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { map, mergeMap } from "rxjs/operators";
import { GeoDBService } from "src/app/services/geo-db.service";
import { SearchCitiesActions } from "../actions/search-cities.actions";

@Injectable()
export class SearchCitiesEffects {

  constructor(private readonly actions$: Actions, private readonly geoDbService: GeoDBService) { }

  load$ = createEffect(() => this.actions$.pipe(
    ofType(SearchCitiesActions.Load),
    mergeMap((props) => this.geoDbService.getCityByName(props.searchTerm)
      .pipe(
        map(cities => {
          return SearchCitiesActions.LoadSuccess({ cities })
        })
      ))
  ));
}