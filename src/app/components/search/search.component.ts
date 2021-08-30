import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { from, Observable, pipe } from 'rxjs';
import { CitySummaryModel } from 'src/app/models/city-summary.model';
import { GeoDBService } from 'src/app/services/geo-db.service';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent{
  
  public readonly searchTermControl: FormControl = new FormControl('');
  
  constructor(private readonly geoDBService: GeoDBService) {}

  public async getCityByName(): Promise<void>{
    let res = new Array<CitySummaryModel>();
    let searchResult = this.geoDBService.getCityByName(this.searchTermControl.value);

    console.log(searchResult);    
  }
}
