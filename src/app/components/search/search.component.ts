import { Component } from '@angular/core';
import { GeoDBService } from 'src/app/services/geo-db.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
data: string ="";
  constructor(private readonly geoDBService: GeoDBService) {}

  public getCityByName(): void{
   // let cityName: string = 'Sloviansk';
    getCity(this.data);
    //this.geoDBService.getCityByName(cityName);
  }
}

const key:string = '682500PcukwQUtq1UDd6XimUfAmBA5HL';
const getCity = async (city:string) => {
const base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${city}&sort=-population`;

const response = await fetch(base);
const data = await response.json();

console.log(data);
}
