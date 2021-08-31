import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CitiesResponse } from "../interfaces/cities-response.interface";
import { City } from "../interfaces/city.interface";

@Injectable({providedIn: "root"})
export class GeoDBService{
    private readonly key:string = '682500PcukwQUtq1UDd6XimUfAmBA5HL';

    constructor(private readonly httpClient: HttpClient){}

    public getCityByName(cityName: string): Observable<City[]>{
        let base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}&sort=-population`;

        return this.httpClient.get<CitiesResponse>(base).pipe(map((response) => {
            return response.data;
        }));
    }
}

