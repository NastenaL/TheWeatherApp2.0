import { WeatherInfo } from "./current-weather.interface";

export interface WeatherResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: WeatherInfo;
    hourly: WeatherInfo;
}
