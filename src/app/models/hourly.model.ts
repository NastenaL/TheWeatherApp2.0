import { Time } from "@angular/common";

export class Hourly {
    public readonly dt: number;
    public readonly temp: number;
    public readonly icon: string;
    public readonly humidity: number;

    constructor(dt: number,
        temp: number,
        icon: string,
        humidity: number) {
        this.dt = dt;
        this.temp = temp;
        this.icon = icon;
        this.humidity = humidity;
    }
}