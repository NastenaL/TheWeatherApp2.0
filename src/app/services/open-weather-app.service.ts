import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CityOverviewResponse } from "../interfaces/city-overview-response.interface";
import { CityOverview } from "../interfaces/city-overview.interface";
import { Coordinate } from "../interfaces/coordinate.interface";

@Injectable({providedIn: "root"})
export class OpenWeatherService{
    private readonly key:string = 'c53d07090596c4b22fd92015cd6a8ced';

    constructor(private readonly httpClient: HttpClient){}

    public getWeatherByCity(coordinate: Coordinate): Observable<CityOverview>{
        let base = `https://api.openweathermap.org/data/2.5/onecall?lat=${coordinate.lat}&lon=${coordinate.lon}&exclude=current&appid=${this.key}`;

        return this.httpClient.get<CityOverviewResponse>(base).pipe(map((response) => {
            return response.data;
        }));
    }
}

