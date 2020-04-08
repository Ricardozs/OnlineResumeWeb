import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SkillsNavbarComponent } from './skills-navbar/skills-navbar.component';
import { SkillsOverviewComponent } from './skills-overview/skills-overview.component';


const routes: Routes = [
  {
    path: 'overview', component: SkillsOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SkillsRoutingModule { }
