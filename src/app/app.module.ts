import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {
  SearchComponent,
  HeaderComponent,
  SearchResultComponent,
  CityOverviewComponent,
  SearchContainerComponent,
  CityDetailsComponent,
  HourlyTileComponent
} from './components'
import { AppComponent } from './app.component';
import { KelvinToCelsiusPipe, MeterToKilometerPipe } from './pipes';
import { AppRoutingModule } from './app-routing.module';
import { actionReducerMap, CityOverviewEffects, SearchCitiesEffects } from './store';
import { environment } from 'src/environments/environment';
import { CityOverviewTopComponent } from './components/city-overview-top/city-overview-top.component';
import { CityOverviewCenterComponent } from './components/city-overview-center/city-overview-center.component';
import { CityOverviewFooterComponent } from './components/city-overview-footer/city-overview-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SearchResultComponent,
    CityOverviewComponent,
    SearchContainerComponent,
    CityDetailsComponent,
    HourlyTileComponent,
    KelvinToCelsiusPipe,
    MeterToKilometerPipe,
    CityOverviewTopComponent,
    CityOverviewCenterComponent,
    CityOverviewFooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(actionReducerMap),
    RouterModule.forRoot([]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([SearchCitiesEffects, CityOverviewEffects]),
    StoreRouterConnectingModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
