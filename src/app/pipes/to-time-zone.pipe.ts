import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'timeZone' })
export class ToTimeZonePipe implements PipeTransform {
    transform(offset: number) {
        let gtm: number = offset / 3600;
        let text: string = "";
        if (gtm > 0) text = "+" + gtm;
        return `GTM ${text}`;
    }
}