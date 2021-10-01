import { WeatherResponse, Weather } from "../interfaces/index";
import { CityOverViewService } from "../services";
import { WindDirection } from "../util/wind-direction.util";

export class CityOverview {
  public readonly id: number;
  public readonly lat: number;
  public readonly lon: number;
  public readonly timezoneOffset: number;
  public readonly weather: Weather;
  public readonly feelsLike: number;
  public readonly humidity: number;
  public readonly uvIndex: number;
  public readonly visibility: number;
  public readonly pressure: number;
  public readonly dewPoint: number;
  public readonly windSpeed: number;
  public readonly windDeg: number;
  public readonly temp: number;
  public readonly localTime: string;

  constructor(id: number, weatherResponse: WeatherResponse) {
    this.id = id;
    this.lat = weatherResponse.lat;
    this.lon = weatherResponse.lon;
    this.timezoneOffset = weatherResponse.timezoneOffset;
    this.localTime = CityOverViewService.transformToTimeZone(CityOverViewService.transformToHours(weatherResponse.timezoneOffset));
    this.feelsLike = weatherResponse.current.feelsLike;
    this.humidity = weatherResponse.current.humidity;
    this.uvIndex = weatherResponse.current.uvi;
    this.visibility = weatherResponse.current.visibility;
    this.pressure = weatherResponse.current.pressure;
    this.dewPoint = weatherResponse.current.dewPoint;
    this.weather = weatherResponse.current.weather[0];
    this.windSpeed = weatherResponse.current.windSpeed;
    this.windDeg = weatherResponse.current.windDeg;
    this.temp = weatherResponse.current.temp;
  }
  get timezone(): string {
    let gtm: number = this.timezoneOffset / 3600;
    let text: string = "";
    if (gtm > 0) text = "+" + gtm;
    return `GTM ${text}`;
  }

  get title(): string {
    return `${this.weather.main}, ${this.weather.description}`;
  }

  get subtitle(): string {
    let temperature: string = (this.temp - 273.15).toFixed(2) + " °C";
    return `Low ${temperature}. Wind ${WindDirection.getDirection(this.windDeg)} at ${this.windSpeed} kph`;
  }
}