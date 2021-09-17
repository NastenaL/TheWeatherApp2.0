import { Weather } from "../interfaces/weather-response/weather.interface";
import { LocalTime } from "../util/clock.util";
import { KelvinToCelsius } from "../util/kelvin-to-celsius.util";
import { KilometerToMeter } from "../util/kilometer-to-meter.util";
import { WindDirection } from "../util/wind-direction.util";

export class CityOverview {
  lat: number;
  lon: number;
  timezone_offset: number;
  weather: Weather;
  _feelsLike: number;
  humidity: number;
  uvIndex: number;
  _visibility: number;
  pressure: number;
  _dewPoint: number;
  wind_speed: number;
  wind_deg: number;
  temp: number;

  constructor(lat: number, lon: number, timezone_offset: number,
    feelsLike: number, humidity: number, uvIndex: number, visibility: number, pressure: number, dewPoint: number,
    weather: Weather, wind_speed: number, wind_deg: number, temp: number) {
    this.lat = lat;
    this.lon = lon;
    this.timezone_offset = timezone_offset;
    this._feelsLike = feelsLike;
    this.humidity = humidity;
    this.uvIndex = uvIndex;
    this._visibility = visibility;
    this.pressure = pressure;
    this._dewPoint = dewPoint;
    this.weather = weather;
    this.wind_speed = wind_speed;
    this.wind_deg = wind_deg;
    this.temp = temp;
  }

  get localTime(): String {
    return LocalTime.getTime(this.timezone_offset);
  }

  get timezone(): string {
    let gtm: number = this.timezone_offset / 3600;
    let text: string = "";
    if (gtm > 0) text = "+" + gtm;
    return `GTM ${text}`;
  }

  get title(): string {
    return `${this.weather.main}, ${this.weather.description}`;
  }

  get subtitle(): string {
    return `Low ${this.temp}. Wind ${WindDirection.getDirection(this.wind_deg)} at ${this.wind_speed} kph`;
  }

  get feelsLike(): string {
    return KelvinToCelsius.convert(this._feelsLike).toFixed(2) + " °C";
  }

  get dewPoint(): string {
    return KelvinToCelsius.convert(this._dewPoint).toFixed(2) + " °C";
  }

  get visibility(): number {
    return KilometerToMeter.convert(this._visibility);
  }
}