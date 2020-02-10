import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ProductsComponent } from './products/products.component';



@NgModule({
  declarations: [
    ClientComponent,
    ProductsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
