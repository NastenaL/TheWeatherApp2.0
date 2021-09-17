import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { WeatherResponse } from "../interfaces/weather-response/weather-response.interface";

@Injectable({ providedIn: "root" })
export class OpenWeatherService {
    private readonly key: string = 'c53d07090596c4b22fd92015cd6a8ced';

    constructor(private readonly httpClient: HttpClient) { }

    public getWeatherByCity(lat: number, lon: number): Observable<WeatherResponse> {
        let base = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${this.key}`;

        return this.httpClient.get<WeatherResponse>(base).pipe(map((response) => {
            return response;
        }));
    }
}

