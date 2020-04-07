import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    SliderComponent
  ],
  bootstrap: [SliderComponent]
})
export class SliderModule { }
