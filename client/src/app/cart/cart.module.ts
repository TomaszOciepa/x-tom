import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart.routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CartComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CartRoutingModule,
  ],
  exports:[
    CartComponent
  ]
})
export class CartModule { }

