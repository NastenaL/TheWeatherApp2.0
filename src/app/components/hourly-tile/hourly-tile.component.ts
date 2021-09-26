import { Component, Input, OnInit } from '@angular/core';
import { Hourly } from 'src/app/interfaces/weather-details/hourly.interface';

@Component({
  selector: 'app-hourly-tile',
  templateUrl: './hourly-tile.component.html',
  styleUrls: ['./hourly-tile.component.css']
})
export class HourlyTileComponent implements OnInit {

  @Input() hourlyWeather: Hourly | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
