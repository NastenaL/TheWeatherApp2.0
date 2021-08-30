export class CityOverviewModel {
    public localTime: string;
    public id: string;
    public coordinated: number[];
    public description: string[];
    public feelsLike: string;
    public humidity: string;
    public uvIndex: string;
    public visibility: string;
    public pressure: string;
    public dewPoint: string;
  
    constructor(id: string, localTime:string, coordinated: number[],description: string[], feelsLike: string, humidity: string, uvIndex: string, visibility: string, pressure: string, dewPoint: string){
      this.localTime = localTime;
      this.coordinated =  coordinated;
      this.id =  id;
      this.description = description;
      this.feelsLike = feelsLike;
      this.humidity = humidity;
      this.uvIndex = uvIndex;
      this.visibility = visibility;
      this.pressure = pressure;
      this.dewPoint = dewPoint;
    }
  }
  