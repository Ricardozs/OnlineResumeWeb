import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutNavbarComponent } from './about-navbar/about-navbar.component';
import { AboutOverviewComponent } from './about-overview/about-overview.component';
import { ClarityModule } from '@clr/angular';
import { StructureComponent } from './structure/structure.component';


@NgModule({
  declarations: [AboutNavbarComponent, AboutOverviewComponent, StructureComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    ClarityModule
  ]
})
export class AboutModule { }
