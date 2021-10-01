export class CityOverViewService {
    public static transformToHours(seconds: number) {
        return seconds / 3600;
    }

    public static transformToTimeZone(hoursOffset: number): string {
        return hoursOffset > 0 ? `+${hoursOffset}` : hoursOffset.toString();
    }
}