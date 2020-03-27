import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidationFeedbackComponent } from './validation-feedback/validation-feedback.component';
import { ValidationProductComponent } from './validation-product/validation-product.component';
import { ValidationOrderAddressComponent } from './validation-order-address/validation-order-address.component';



@NgModule({
  declarations: [ValidationFeedbackComponent, ValidationProductComponent, ValidationOrderAddressComponent],
  imports: [
    CommonModule
  ],
  exports: [ValidationFeedbackComponent, ValidationProductComponent, ValidationOrderAddressComponent]
})
export class ValidationModule { }
