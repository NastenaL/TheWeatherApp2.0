import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {AppComponent, environment, AppRoutingModule, SearchComponent, HeaderComponent, SearchResultComponent, GeoDBService} from '../app/index'
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { actionReducerMap } from './store/reducers/main.reducer';
import { SearchCitiesEffects } from './store/effects/search-cities.effects';
import { CityOverviewComponent } from './components/city-overview/city-overview.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { CityOverviewEffects } from './store/effects/city-overview.effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    SearchResultComponent,
    CityOverviewComponent,
    SearchContainerComponent
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
