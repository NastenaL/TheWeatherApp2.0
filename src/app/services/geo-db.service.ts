import { Observable } from "rxjs";
import { CitySummaryModel } from "../models/city-summary.model";

export class GeoDBService{
    private readonly key:string = '682500PcukwQUtq1UDd6XimUfAmBA5HL';

    public async getCityByName(cityName: string): Promise<CitySummaryModel[]>{
        let base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}&sort=-population`;
        let response = await fetch(base);
        let data = await response.json()
        //.then(response => response.json().data as CitySummaryModel[]);
        return data;
    }
}

