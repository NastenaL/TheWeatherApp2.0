import { Hourly } from "../weather-details/hourly.interface";
import { WeatherInfo } from "./current-weather.interface";
// TODO: Same as for Coordinate interface
export interface WeatherResponse {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: WeatherInfo;
    hourly: Hourly[];
}
