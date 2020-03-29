import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DroneFormComponent } from './drone-form/drone-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormRoutingModule } from './form.routing.module';
import { LaptopFormComponent } from './laptop-form/laptop-form.component';
import { SmartphoneFormComponent } from './smartphone-form/smartphone-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserRoleFormComponent } from './user-role-form/user-role-form.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { OrderDetailFormComponent } from './order-detail-form/order-detail-form.component';
import { OrderAddressFormComponent } from './order-address-form/order-address-form.component';
import { ValidationModule } from '../validation/validation.module';

@NgModule({
  declarations: [DroneFormComponent, LaptopFormComponent, SmartphoneFormComponent, UserFormComponent, UserRoleFormComponent, OrderFormComponent, OrderDetailFormComponent, OrderAddressFormComponent,],
  imports: [
    CommonModule,
    ValidationModule,
    ReactiveFormsModule,
    FormRoutingModule,
  ],
  exports: [
    DroneFormComponent, LaptopFormComponent, SmartphoneFormComponent, UserFormComponent, UserRoleFormComponent, OrderFormComponent
  ]
})
export class FormModule { }
