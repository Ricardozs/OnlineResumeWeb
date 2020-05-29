import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';


const routes: Routes = [
  {
    path:'', component:NavbarComponent, children: [
      {path:'overview', component:AboutComponent},
      {path:'contact-info', component:ContactInfoComponent},
      {path:'education', component:EducationComponent},
      {path:'certificates', component:CertificatesComponent},
      {path:'', redirectTo:'overview', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonalInfoRoutingModule { }
