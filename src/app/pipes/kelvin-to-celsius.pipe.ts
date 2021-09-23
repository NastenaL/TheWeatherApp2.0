import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertToCelsius' })
export class KelvinToCelsiusPipe implements PipeTransform {
    transform(kelvin: number, extension: string = '°C') {
        return (kelvin - 273.15).toFixed(2) + extension;
    }
}