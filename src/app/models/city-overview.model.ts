import { Weather } from "../interfaces/weather-response/weather.interface";
import { LocalTime } from "../util/clock.util";
import { WindDirection } from "../util/wind-direction.util";

export class CityOverview {
  lat: number;
  lon: number;
  timezone_offset: number;
  weather: Weather;
  //description: string[];
  feelsLike: number;
  humidity: number;
  uvIndex: number;
  visibility: number;
  pressure: number;
  dewPoint: number;
  wind_speed: number;
  wind_deg: number;
  temp: number;

  constructor(lat: number, lon: number, timezone_offset: number,
    feelsLike: number, humidity: number, uvIndex: number, visibility: number, pressure: number, dewPoint: number,
    weather: Weather, wind_speed: number, wind_deg: number, temp: number) {
    this.lat = lat;
    this.lon = lon;
    this.timezone_offset = timezone_offset;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.uvIndex = uvIndex;
    this.visibility = visibility;
    this.pressure = pressure;
    this.dewPoint = dewPoint;
    this.weather = weather;
    this.wind_speed = wind_speed;
    this.wind_deg = wind_deg;
    this.temp = temp;
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
    return `${this.weather.main}, ${this.weather.description}`;
  }

  get subtitle() {
    return `Low ${this.temp}. Wind ${WindDirection.getDirection(this.wind_deg)} at ${this.wind_speed} kph`;
  }
}