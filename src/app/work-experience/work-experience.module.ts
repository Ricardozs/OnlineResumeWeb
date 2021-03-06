import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceRoutingModule } from './work-experience-routing.module';
import { WEOverviewComponent } from './we-overview/we-overview.component';
import { WENavbarComponent } from './we-navbar/we-navbar.component';
import { ClarityModule } from '@clr/angular';
import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';
import { HorizontalTimelineComponent } from './horizontal-timeline/horizontal-timeline.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    WEOverviewComponent, 
    WENavbarComponent,
    HorizontalTimelineComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    WorkExperienceRoutingModule,
    ClarityModule,
    NgxHorizontalTimelineModule
  ]
})
export class WorkExperienceModule { }
