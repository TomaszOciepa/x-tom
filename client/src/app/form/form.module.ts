import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [DroneFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [
    DroneFormComponent,
  ]
})
export class FormModule { }
