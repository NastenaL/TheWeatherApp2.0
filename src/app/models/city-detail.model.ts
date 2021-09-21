import { Hourly } from "../interfaces/weather-details/hourly.interface";

export class CityDetail {
    hourly: Hourly[];

    constructor(hourly: Hourly[]) {
        this.hourly = hourly;
    }
}