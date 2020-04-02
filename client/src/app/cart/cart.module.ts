import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorModule } from '../error/error.module';

@NgModule({
  declarations: [CartComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ErrorModule,
    CartRoutingModule,
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }

