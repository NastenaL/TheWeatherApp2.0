import { Time } from "@angular/common";

// TODO: Please, refactor it to interface or move into models
// TODO: In general, same comments as ofr CityOverviewModel
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