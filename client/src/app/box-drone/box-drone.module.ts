import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxDroneComponent } from './box-drone/box-drone.component';
import { BoxDroneRoutingModule } from './box-drone-routing.module';

@NgModule({
  declarations: [BoxDroneComponent],
  imports: [
    CommonModule,
    BoxDroneRoutingModule
  ],
  exports: [BoxDroneComponent]
})
export class BoxDroneModule { }
