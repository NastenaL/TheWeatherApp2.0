import { Time } from "@angular/common";

export interface Hourly {
    time: Time;
    temp: number;
    icon: string;
    humidity: number;
}