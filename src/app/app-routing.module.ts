import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityDetailsComponent, CityOverviewComponent, SearchContainerComponent } from './components';

const routes: Routes = [
  {
    path: 'search',
    component: SearchContainerComponent
  },
  {
    path: ':id',
    component: CityOverviewComponent
  },
  {
    path: ':id/details',
    component: CityDetailsComponent
  },
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
