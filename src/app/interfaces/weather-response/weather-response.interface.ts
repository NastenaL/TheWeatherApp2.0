import { Hourly } from "../../models/index";
import { WeatherInfo } from "../index";

export interface WeatherResponse {
    readonly lat: number;
    readonly lon: number;
    readonly timezone: string;
    readonly timezone_offset: number;
    readonly current: WeatherInfo;
    readonly hourly: Hourly[];
}
