export interface CityOverview {
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
}