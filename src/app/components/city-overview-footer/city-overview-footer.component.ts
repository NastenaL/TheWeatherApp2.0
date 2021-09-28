import { Component, Input } from '@angular/core';
import { CityOverview } from 'src/app/models';

@Component({
  selector: 'app-city-overview-footer',
  templateUrl: './city-overview-footer.component.html',
  styleUrls: ['./city-overview-footer.component.css']
})
export class CityOverviewFooterComponent {
  @Input() cityOverview: CityOverview | undefined;
}
