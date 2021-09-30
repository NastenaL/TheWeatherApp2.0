import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Hourly } from 'src/app/models/hourly.model';

@Component({
  selector: 'app-hourly-tile',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hourly-tile.component.html',
  styleUrls: ['./hourly-tile.component.css']
})
export class HourlyTileComponent {
  @Input() hourlyWeatherData: Hourly | undefined;
}
