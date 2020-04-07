import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    SliderComponent
  ]
})
export class SliderModule { }
