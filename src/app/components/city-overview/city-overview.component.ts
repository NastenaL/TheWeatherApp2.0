import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { City } from 'src/app/interfaces/city.interface';
import { CityOverviewEffects } from 'src/app/store/effects/city-overview.effects';
import { searchCitiesSelector } from 'src/app/store/selectors/search-cities.selectors';

@Component({
  selector: 'wa-city-overview',
  templateUrl: './city-overview.component.html',
  styleUrls: ['./city-overview.component.css']
})
export class CityOverviewComponent implements OnInit{
  public readonly cities$ = this.store.select(searchCitiesSelector.selectCities);
  private selectedItemId: number = 0;

  constructor(private readonly store: Store, private route: ActivatedRoute) {}

  ngOnInit() { 
    this.route.params.subscribe(params => {
      this.selectedItemId = parseInt(params['id']) 
    });

    let selectedCity:City| undefined; 
    this.cities$.subscribe((items: City[]) =>{
      selectedCity = items.find(i => i.id === this.selectedItemId);
    });
    console.log(selectedCity);
   }

}
