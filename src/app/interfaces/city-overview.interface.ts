export class CityOverview {
  id: string;
  localTime: string;
  lat: number;
  lon: number;
  timezone_offset: number;
  description: string[];
  feelsLike: string;
  humidity: string;
  uvIndex: string;
  visibility: string;
  pressure: string;
  dewPoint: string;

  constructor(id: string, localTime: string, lat: number, lon: number, timezone_offset: number, description: string[],
    feelsLike: string, humidity: string, uvIndex: string, visibility: string, pressure: string, dewPoint: string) {
    this.id = id;
    this.localTime = localTime;
    this.lat = lat;
    this.lon = lon;
    this.timezone_offset = timezone_offset;
    this.description = description;
    this.feelsLike = feelsLike;
    this.humidity = humidity;
    this.uvIndex = uvIndex;
    this.visibility = visibility;
    this.pressure = pressure;
    this.dewPoint = dewPoint;
  }
}