import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CityOverviewComponent } from './components/city-overview/city-overview.component';
import { SearchContainerComponent } from './components/search-container/search-container.component';

const routes: Routes = [
  {
    path:'search',
    component: SearchContainerComponent
  },
{
  path:':id',
  component: CityOverviewComponent
},
{
  path:'',
  redirectTo: '/search',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
