import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    CommonModule,
    ClarityModule
  ],
  exports: [
    FooterComponent
  ]
})
export class SharedModule { }
