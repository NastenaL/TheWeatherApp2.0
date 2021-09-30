import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { City } from "../interfaces/index";

@Injectable({ providedIn: "root" })
export class GeoDBService {
    private readonly key: string = '682500PcukwQUtq1UDd6XimUfAmBA5HL';

    constructor(private readonly httpClient: HttpClient) { }

    public getCityByName(cityName: string): Observable<City[]> {
        let base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}&sort=-population`;

        return this.httpClient.get<any>(base).pipe(debounceTime(500), map((response) => {
            return response.data;
        }));
    }
}

