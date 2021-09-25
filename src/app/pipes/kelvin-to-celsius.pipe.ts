import { Pipe, PipeTransform } from '@angular/core';

// TODO: Please, rename pipe to describe final state of transformation
// Pipe will always transform one state to another, so such verb in pipe name looks excessive
@Pipe({ name: 'convertToCelsius' })
export class KelvinToCelsiusPipe implements PipeTransform {
    // TODO: Please, check if we can omit extension and use default value  
    transform(kelvin: number, extension: string = '°C') {
        // TODO: Please, move magic numbers into constants
        // TODO: Move such functionality into shared module 
        // TODO: Optionally
        // We also could install third-party lib for such repetitive functionalities
        return (kelvin - 273.15).toFixed(2) + extension;
    }
}