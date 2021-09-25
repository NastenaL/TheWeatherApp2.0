import { Hourly } from "../interfaces/weather-details/hourly.interface";

// TODO: Same comments as ofr CityOverviewModel
export class CityDetail {
    hourly: Hourly[];

    constructor(hourly: Hourly[]) {
        this.hourly = hourly;
    }
}