import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path:'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
  },
  {
    path:'personal-information', loadChildren: () => import('./personal-info/personal-info.module').then(m => m.PersonalInfoModule)
  },
  {
    path:'work-experience', loadChildren: () => import('./work-experience/work-experience.module').then(m => m.WorkExperienceModule)
  },
  {
    path:'skills', loadChildren: () => import('./skills/skills.module').then(m => m.SkillsModule)
  },
  {
    path:'', redirectTo:'about/overview', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
