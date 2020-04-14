import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxLastProductComponent } from './box-last-product/box-last-product.component';
import { BoxLastProductRoutingModule } from './box-last-product-routing.module';



@NgModule({
  declarations: [BoxLastProductComponent],
  imports: [
    CommonModule,
    BoxLastProductRoutingModule
  ],
  exports: [BoxLastProductComponent]
})
export class BoxLastProductModule { }
