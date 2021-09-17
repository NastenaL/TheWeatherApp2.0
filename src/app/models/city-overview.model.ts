import { Weather } from "../interfaces/weather-response/weather.interface";
import { LocalTime } from "../util/clock.util";

export class CityOverview {
  lat: number;
  lon: number;
  timezone_offset: number;
  _weather: Weather;
  //description: string[];
  feelsLike: number;
  humidity: number;
  uvIndex: number;
  visibility: number;
  pressure: number;
  dewPoint: number;

  constructor(lat: number, lon: number, timezone_offset: number,
    feelsLike: number, humidity: number, uvIndex: number, visibility: number, pressure: number, dewPoint: number,
    _weather: Weather) {
    this.lat = lat;
    this.lon = lon;
    this.timezone_offset = timezone_offset;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.uvIndex = uvIndex;
    this.visibility = visibility;
    this.pressure = pressure;
    this.dewPoint = dewPoint;
    this._weather = _weather;
  }

  get localTime() {
    return LocalTime.getTime(this.timezone_offset);
  }

  get timezone() {
    let gtm: number = this.timezone_offset / 3600;
    let text: string = "";
    if (gtm > 0) text = "+" + gtm;
    return `GTM ${text}`;
  }

  get title() {
    return `${this._weather.main}, ${this._weather.description}`;
  }
}