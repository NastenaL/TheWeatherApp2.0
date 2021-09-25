import { Subscription, timer } from "rxjs";
import { map, share } from "rxjs/operators";

// TODO: Please, make sure that file name and class name is matched
export class LocalTime {

    // TODO: Check and Remove unused code
    private static rxTime = new Date();
    // TODO:Please, check usage
    private static intervalId: NodeJS.Timeout | undefined;
    private static subscription: Subscription | undefined = undefined;

    static getTime(offset: number): String {
        // TODO: Check if we can use const here
        let test = offset * 1000;
        let date = new Date(Date.now() + test),
            hours = "0" + date.getUTCHours(),
            minutes = "0" + date.getUTCMinutes(),
            seconds = "0" + date.getUTCSeconds();

        return (hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2));
    }

    // TODO: Check usage of this approach
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
        // TODO:Please, check usage
        clearInterval(this.intervalId!);
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}