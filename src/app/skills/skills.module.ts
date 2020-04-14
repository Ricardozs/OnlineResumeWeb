import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsOverviewComponent } from './skills-overview/skills-overview.component';
import { SkillsNavbarComponent } from './skills-navbar/skills-navbar.component';
import { ClarityModule } from '@clr/angular';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [SkillsOverviewComponent, SkillsNavbarComponent],
  imports: [
    SharedModule,
    CommonModule,
    SkillsRoutingModule,
    ClarityModule
  ]
})
export class SkillsModule { }
