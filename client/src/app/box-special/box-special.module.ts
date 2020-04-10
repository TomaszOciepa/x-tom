import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxSpecialRoutingModule } from './box-special-routing.module';
import { BoxSpecialComponent } from './box-special/box-special.component';


@NgModule({
  declarations: [BoxSpecialComponent],
  imports: [
    CommonModule,
    BoxSpecialRoutingModule
  ],
  exports: [
    BoxSpecialComponent
  ]
})
export class BoxSpecialModule { }
