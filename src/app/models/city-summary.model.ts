export class CitySummaryModel {
  public id: string;
  public name: string;
  public country: string;
  public state: string;
  public coordinates: number[];
  public isFavorite: boolean;

  constructor(id:string, name:string, country: string, state: string, coordinates: number[], isFavorite: boolean){
    this.name = name;
    this.country =  country;
    this.id =  id;
    this.state = state;
    this.coordinates = coordinates;
    this.isFavorite = isFavorite;
  }
}
