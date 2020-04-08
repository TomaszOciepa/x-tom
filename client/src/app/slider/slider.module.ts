import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [SliderComponent],
  imports: [
    CommonModule,
    NgbModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
  exports: [
    SliderComponent
  ],
  bootstrap: [SliderComponent]
})
export class SliderModule { }
