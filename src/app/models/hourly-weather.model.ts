export class HourlyWeatherModel {
    public temperature: string;
    public humidity: string;
    public image: string;
    public time: string;
  
    constructor(temperature: string, humidity:string, image: string, time: string){
      this.temperature = temperature;
      this.humidity =  humidity;
      this.image =  image;
      this.time = time;
    }
  }
  