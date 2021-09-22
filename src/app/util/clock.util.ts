import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

export class LocalTime {

    private static rxTime = new Date();
    private static intervalId: NodeJS.Timeout | undefined;
    private static subscription: Subscription | undefined = undefined;

    static getTime(offset: number): String {
        let test = offset * 1000;
        let date = new Date(Date.now() + test),
            hours = "0" + date.getUTCHours(),
            minutes = "0" + date.getUTCMinutes(),
            seconds = "0" + date.getUTCSeconds();

        return (hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2));
    }

    static loadClock(): void {
        this.subscription = timer(0, 1000)
            .pipe(
                map(() => new Date()),
                share()
            )
            .subscribe(time => {
                LocalTime.rxTime = time;
            });
    }

    static deleteClock() {
        clearInterval(this.intervalId!);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}