import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutNavbarComponent } from './about-navbar/about-navbar.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { ClarityModule } from '@clr/angular';
import { StructureComponent } from './structure/structure.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AboutNavbarComponent, 
    AboutOverviewComponent, 
    StructureComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    AboutRoutingModule,
    ClarityModule
  ]
})
export class AboutModule { }
