import { CityUtil } from 'src/app/util/city.util';

export class CitySummaryModel {
  public id: string;
  public name: string;
  public country: string;
  public state: string;

  constructor(name:string, country: string, state: string){
    this.name = name;
    this.country =  country;
    this.id =  CityUtil.getId;
    this.state = state;
  }
}
