import { Time } from "@angular/common";

export class Hourly {
    time: Time;
    temp: number;
    icon: string;
    humidity: number;

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