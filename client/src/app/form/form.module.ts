import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form.routing.module';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { SmartphoneFormComponent } from './smartphone-form/smartphone-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';

@NgModule({
  declarations: [DroneFormComponent, LaptopFormComponent, SmartphoneFormComponent, UserFormComponent, UserRoleFormComponent,],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormRoutingModule,
  ],
  exports: [
    DroneFormComponent, LaptopFormComponent, SmartphoneFormComponent, UserFormComponent, UserRoleFormComponent
  ]
})
export class FormModule { }