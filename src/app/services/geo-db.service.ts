import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
interface ICitiesResponse
{
data: City[]
}

interface City{
    id: string
}

@Injectable({providedIn: "root"})
export class GeoDBService{
    private readonly key:string = '682500PcukwQUtq1UDd6XimUfAmBA5HL';

    constructor(private readonly httpClient: HttpClient){
    }

    public getCityByName(cityName: string): Observable<City[]>{
        let base = `http://geodb-free-service.wirefreethought.com/v1/geo/cities?namePrefix=${cityName}&sort=-population`;
        //let response = await fetch(base);
        //let data = await response.json()
        //.then(response => response.json().data as CitySummaryModel[]);
        //return data;

        return this.httpClient.get<ICitiesResponse>(base).pipe(map((response) => {
            return response.data;
        }));

    }
}

