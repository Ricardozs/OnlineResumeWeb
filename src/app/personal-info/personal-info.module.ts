import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PersonalInfoRoutingModule } from './personal-info-routing.module';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { ClarityModule } from '@clr/angular';
import { EducationComponent } from './education/education.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AgGridAngular, AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [AboutComponent, NavbarComponent, ContactInfoComponent, EducationComponent, CertificatesComponent],
  imports: [
    CommonModule,
    PersonalInfoRoutingModule,
    ClarityModule,
    AgGridModule.withComponents([])
  ]
})
export class PersonalInfoModule { }
