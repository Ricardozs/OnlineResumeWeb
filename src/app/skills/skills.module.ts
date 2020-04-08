import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillsRoutingModule } from './skills-routing.module';
import { SkillsOverviewComponent } from './skills-overview/skills-overview.component';
import { SkillsNavbarComponent } from './skills-navbar/skills-navbar.component';
import { ClarityModule } from '@clr/angular';


@NgModule({
  declarations: [SkillsOverviewComponent, SkillsNavbarComponent],
  imports: [
    CommonModule,
    SkillsRoutingModule,
    ClarityModule
  ]
})
export class SkillsModule { }
