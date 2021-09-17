export class LocalTime {

    static getTime(offset: number): String {
        let test = offset * 1000;
        let date = new Date(Date.now() + test),
            hours = "0" + date.getUTCHours(),
            minutes = "0" + date.getUTCMinutes(),
            seconds = "0" + date.getUTCSeconds();

        return (hours.substr(-2) + ":" + minutes.substr(-2) + ":" + seconds.substr(-2));
    }
}