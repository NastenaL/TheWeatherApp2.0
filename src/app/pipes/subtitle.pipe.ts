import { Pipe, PipeTransform } from '@angular/core';
import { WindDirection } from '../util/wind-direction.util';

@Pipe({ name: 'subtitle' })
export class SubtitlePipe implements PipeTransform {
    transform(temp: number, windDeg: number, windSpeed: number) {
        let temperature: string = (temp - 273.15).toFixed(2) + " °C";
        return `Low ${temperature}. Wind ${WindDirection.getDirection(windDeg)} at ${windSpeed} kph`;
    }
}