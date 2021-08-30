export class CityDetailModel {
    public id: string;
    public name: string;
    public country: string;
    public state: string;
  
    constructor(id: string, name:string, country: string, state: string){
      this.name = name;
      this.country =  country;
      this.id =  id;
      this.state = state;
    }
  }
  