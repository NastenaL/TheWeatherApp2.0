import { Weather } from "./weather.interface";

export interface WeatherInfo {
    readonly dt: number;
    readonly sunrise: number;
    readonly sunset: number;
    readonly temp: number;
    readonly feelsLike: number;
    readonly pressure: number;
    readonly humidity: number;
    readonly dewPoint: number
    readonly uvi: number;
    readonly clouds: number;
    readonly visibility: number;
    readonly windSpeed: number;
    readonly windDeg: number;
    readonly weather: Weather[];
}