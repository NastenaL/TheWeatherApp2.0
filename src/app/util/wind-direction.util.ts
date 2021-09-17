export class WindDirection {
    static getDirection(degrees: number): string {
        degrees *= 10;
        let cardinals = [
            "north",
            "northeast",
            "east",
            "southeast",
            "south",
            "southwest",
            "west",
            "northwest"
        ];
        return cardinals[Math.floor((degrees % 3600) / 225)];
    }
}