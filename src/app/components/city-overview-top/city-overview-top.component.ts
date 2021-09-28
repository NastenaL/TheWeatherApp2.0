import { Component, Input } from '@angular/core';
import { CityOverview } from 'src/app/models';

@Component({
  selector: 'app-city-overview-top',
  templateUrl: './city-overview-top.component.html',
  styleUrls: ['./city-overview-top.component.css']
})
export class CityOverviewTopComponent {
  @Input() cityOverview: CityOverview | undefined;
}
