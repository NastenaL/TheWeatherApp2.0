import { Time } from "@angular/common";

export class Hourly {
    public readonly time: Time;
    public readonly temp: number;
    public readonly icon: string;
    public readonly humidity: number;

    constructor(time: Time,
        temp: number,
        icon: string,
        humidity: number) {
        this.time = time;
        this.temp = temp;
        this.icon = icon;
        this.humidity = humidity;
    }
}