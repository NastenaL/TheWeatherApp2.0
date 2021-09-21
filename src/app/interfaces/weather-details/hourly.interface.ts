import { Time } from "@angular/common";
import { KelvinToCelsius } from "src/app/util/kelvin-to-celsius.util";

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

    get temperature(): string {
        return KelvinToCelsius.convert(this.temp).toFixed(2) + " °C";
    }
}