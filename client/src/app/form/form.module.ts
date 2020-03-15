import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form.routing.module';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { SmartphoneFormComponent } from './smartphone-form/smartphone-form.component';

@NgModule({
  declarations: [DroneFormComponent, LaptopFormComponent, SmartphoneFormComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
  ],
  exports: [
    DroneFormComponent, LaptopFormComponent, SmartphoneFormComponent
  ]
})
export class FormModule { }
