import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutNavbarComponent } from './about-navbar/about-navbar.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { StructureComponent } from './structure/structure.component';


const routes: Routes = [
  {
    path:'', component:AboutNavbarComponent, children: [
      {
        path:'overview', component:AboutOverviewComponent
      },
      {
        path:'structure', component:StructureComponent
      },
      {
        path:'', redirectTo:'about/overview', pathMatch: 'full'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
