import { Component, Input, OnInit } from '@angular/core';
import { Hourly } from 'src/app/interfaces/weather-details/hourly.interface';

@Component({
  selector: 'app-hourly-tile',
  templateUrl: './hourly-tile.component.html',
  styleUrls: ['./hourly-tile.component.css']
    // TODO: Please, provider changeDetectionStrategy
})
export class HourlyTileComponent implements OnInit {

  @Input() hourly: Hourly | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
