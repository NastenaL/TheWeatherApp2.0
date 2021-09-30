export class LocalTime {


    static loadClock(currentDate: Date): any {
        console.log(currentDate);
        setInterval(() => {
            return currentDate.toLocaleTimeString();
        }, 1000);
    }
}