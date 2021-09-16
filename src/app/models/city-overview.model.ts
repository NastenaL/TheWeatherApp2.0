export class CityOverview {
  // localTime: string;
  lat: number;
  lon: number;
  timezone_offset: number;
  //description: string[];
  feelsLike: number;
  humidity: number;
  uvIndex: number;
  visibility: number;
  pressure: number;
  dewPoint: number;

  constructor(lat: number, lon: number, timezone_offset: number, //description: string[],
    feelsLike: number, humidity: number, uvIndex: number, visibility: number, pressure: number, dewPoint: number) {
    //this.localTime = localTime;
    this.lat = lat;
    this.lon = lon;
    this.timezone_offset = timezone_offset;
    //this.description = description;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.uvIndex = uvIndex;
    this.visibility = visibility;
    this.pressure = pressure;
    this.dewPoint = dewPoint;
  }
}