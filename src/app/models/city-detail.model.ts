import { Hourly } from "./hourly.model";

export class CityDetail {
    public readonly hourly: Hourly[];

    constructor(hourly: Hourly[]) {
        this.hourly = hourly;
    }
}