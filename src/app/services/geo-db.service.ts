import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { CitiesResponse } from "../interfaces/cities-response.interface";
import { City } from "../interfaces/city.interface";

@Injectable({ providedIn: "root" })
export class GeoDBService {
    // TODO: Please, move into constants, or better into env props
    // Also check if we can remove this 
    private readonly key: string = '682500PcukwQUtq1UDd6XimUfAmBA5HL';

    constructor(private readonly httpClient: HttpClient) { }

    public getCityByName(cityName: string): Observable<City[]> {
        let base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}&sort=-population`;

        // TODO: Please, move debounceTime into client service, since we are not required every time to use this debounce for each client 
        return this.httpClient.get<CitiesResponse>(base).pipe(debounceTime(500), map((response) => {
            return response.data;
        }));
    }
}

