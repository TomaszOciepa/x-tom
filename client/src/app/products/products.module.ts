import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';
import { ProductComponent } from './product/product.component';
import { BasketModule } from '../basket/basket.module';
import { DroneComponent } from './drone/drone.component';
import { AuthModule } from '../auth/auth.module';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { AddDroneComponent } from './drone/add-drone/add-drone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLaptopComponent } from './laptop/add-laptop/add-laptop.component';
import { AddSmartphoneComponent } from './smartphone/add-smartphone/add-smartphone.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [ProductsComponent, ProductByIdComponent, ProductComponent, DroneComponent, LaptopComponent,
     SmartphoneComponent, AddDroneComponent, AddLaptopComponent, AddSmartphoneComponent, DeleteProductComponent, EditProductComponent,
    ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BasketModule,
    AuthModule,
    FormModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
