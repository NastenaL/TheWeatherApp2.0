import { ChangeDetectionStrategy, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CityOverview } from 'src/app/models';

@Component({
  selector: 'app-city-overview-top',
  templateUrl: './city-overview-top.component.html',
  styleUrls: ['./city-overview-top.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CityOverviewTopComponent implements OnInit, OnDestroy {

  @Input() cityOverview: CityOverview | undefined = undefined;

  public localTime$ = new BehaviorSubject<Date | null>(null);
  private intervalId: number | null = null;

  public ngOnInit() {
    this.setTodayDate();
    setInterval(() => {
      this.setTodayDate();
    }, 1000);
  }

  public ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  private setTodayDate() {
    this.localTime$.next(new Date());
  }
}
