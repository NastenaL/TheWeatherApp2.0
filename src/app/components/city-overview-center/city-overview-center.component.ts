import { Component, Input } from '@angular/core';
import { CityOverview } from 'src/app/models';

@Component({
  selector: 'app-city-overview-center',
  templateUrl: './city-overview-center.component.html',
  styleUrls: ['./city-overview-center.component.css']
})
export class CityOverviewCenterComponent {
  @Input() cityOverview: CityOverview | undefined;
}
