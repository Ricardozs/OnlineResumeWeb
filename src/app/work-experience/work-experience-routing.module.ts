import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WENavbarComponent } from './we-navbar/we-navbar.component';
import { WEOverviewComponent } from './we-overview/we-overview.component';


const routes: Routes = [
  {
    path:'', component:WENavbarComponent, children:[
      {
        path:'overview', component:WEOverviewComponent
      },
      {
        path:'', redirectTo:'work-experience/overview', pathMatch:'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkExperienceRoutingModule { }
