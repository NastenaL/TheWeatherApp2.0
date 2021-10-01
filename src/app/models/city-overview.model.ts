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

  constructor(id: number, weatherResponse: WeatherResponse) {
    this.id = id;
    this.lat = weatherResponse.lat;
    this.lon = weatherResponse.lon;

    this.timezoneOffset = weatherResponse.timezone_offset;
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

  get localTime(): string {
    console.log(CityOverViewService.transformToTimeZone(CityOverViewService.transformToHours(this.timezoneOffset)));
    return CityOverViewService.transformToTimeZone(CityOverViewService.transformToHours(this.timezoneOffset));
  }

  get title(): string {
    return `${this.weather.main}, ${this.weather.description}`;
  }
}