import { WeatherResponse } from "../interfaces/weather-response/weather-response.interface";
import { Weather } from "../interfaces/weather-response/weather.interface";
import { LocalTime } from "../util/clock.util";
import { WindDirection } from "../util/wind-direction.util";

export class CityOverview {
  id: number;
  lat: number;
  lon: number;
  timezone_offset: number;
  weather: Weather;
  feelsLike: number;
  humidity: number;
  uvIndex: number;
  visibility: number;
  pressure: number;
  dewPoint: number;
  wind_speed: number;
  wind_deg: number;
  temp: number;

  constructor(id: number, weatherResponce: WeatherResponse) {
    this.id = id;
    this.lat = weatherResponce.lat;
    this.lon = weatherResponce.lon;
    this.timezone_offset = weatherResponce.timezone_offset;
    this.feelsLike = weatherResponce.current.feels_like;
    this.humidity = weatherResponce.current.humidity;
    this.uvIndex = weatherResponce.current.uvi;
    this.visibility = weatherResponce.current.visibility;
    this.pressure = weatherResponce.current.pressure;
    this.dewPoint = weatherResponce.current.dew_point;
    this.weather = weatherResponce.current.weather[0];
    this.wind_speed = weatherResponce.current.wind_speed;
    this.wind_deg = weatherResponce.current.wind_deg;
    this.temp = weatherResponce.current.temp;
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
    let temperature: string = (this.temp - 273.15).toFixed(2) + " °C";
    return `Low ${temperature}. Wind ${WindDirection.getDirection(this.wind_deg)} at ${this.wind_speed} kph`;
  }
}