import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent, environment, AppRoutingModule, SearchComponent, HeaderComponent, SearchResultComponent, actionReducerMap, SearchCitiesEffects, CityOverviewComponent, SearchContainerComponent, CityOverviewEffects, CityDetailsComponent, HourlyTileComponent, KelvinToCelsiusPipe, MeterToKilometerPipe } from '../app/index'

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
    MeterToKilometerPipe
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
