import { Weather } from "./weather.interface";

export interface WeatherInfo {
    readonly dt: number;
    readonly sunrise: number;
    readonly sunset: number;
    readonly temp: number;
    readonly feels_like: number;
    readonly pressure: number;
    readonly humidity: number;
    readonly dew_point: number
    readonly uvi: number;
    readonly clouds: number;
    readonly visibility: number;
    readonly wind_speed: number;
    readonly wind_deg: number;
    readonly weather: Weather[];
}