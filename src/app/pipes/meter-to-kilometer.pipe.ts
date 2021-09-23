import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'convertToMeter' })
export class MeterToKilometerPipe implements PipeTransform {
    transform(meter: number, extension: string = 'km') {
        return meter / 1000 + extension;
    }
}