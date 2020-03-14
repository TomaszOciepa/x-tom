import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CartModule } from '../cart/cart.module';
import { DronesComponent } from './products/drones/drones.component';
import { AuthModule } from '../auth/auth.module';

import { SmartphonesComponent } from './products/smartphones/smartphones.component';
import { AddDroneComponent } from './products/drones/add-drone/add-drone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddLaptopComponent } from './products/laptops/add-laptop/add-laptop.component';
import { AddSmartphoneComponent } from './products/smartphones/add-smartphone/add-smartphone.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormModule } from '../form/form.module';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { DroneByIdComponent } from './product/drone-by-id/drone-by-id.component';
import { LaptopByIdComponent } from './product/laptop-by-id/laptop-by-id.component';
import { SmartphoneByIdComponent } from './product/smartphone-by-id/smartphone-by-id.component';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, DronesComponent, LaptopsComponent,
     SmartphonesComponent, AddDroneComponent, AddLaptopComponent, AddSmartphoneComponent, DeleteProductComponent, EditProductComponent, DroneByIdComponent, LaptopByIdComponent, SmartphoneByIdComponent,
    ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CartModule,
    AuthModule,
    FormModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
