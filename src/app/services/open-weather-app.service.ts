import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WeatherResponse } from "../interfaces/weather-response/weather-response.interface";

@Injectable({ providedIn: "root" })
export class OpenWeatherService {
    // TODO: Please, move into constants, or better into env props
    private readonly key: string = 'c53d07090596c4b22fd92015cd6a8ced';

    constructor(private readonly httpClient: HttpClient) { }

    public getWeatherByCity(lat: number, lon: number): Observable<WeatherResponse> {
        // TODO: Please, check if can use const here instead
        // TODO: Please, check HttpParams instead of string interpolation
        let base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.key}`;

        // TODO: Please, check if we can remove this code here
        /* 
        map((response) => {
            return response;
        })
         */
        // TODO:Please, check if we really takes same response model from two different api and endpoints 
        return this.httpClient.get<WeatherResponse>(base).pipe(map((response) => {
            return response;
        }));
    }

    // TODO: Please, move into GeoDb service
    public getWeatherById(id: number): Observable<WeatherResponse> {
        let base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities/${id}`;

        return this.httpClient.get<WeatherResponse>(base).pipe(map((response) => {
            return response;
        }));
    }
}

