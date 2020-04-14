import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products.routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { CartModule } from '../cart/cart.module';
import { DronesComponent } from './products/drones/drones.component';
import { AuthModule } from '../auth/auth.module';

import { SmartphonesComponent } from './products/smartphones/smartphones.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { FormModule } from '../form/form.module';
import { LaptopsComponent } from './products/laptops/laptops.component';
import { DroneByIdComponent } from './product/drone-by-id/drone-by-id.component';
import { LaptopByIdComponent } from './product/laptop-by-id/laptop-by-id.component';
import { SmartphoneByIdComponent } from './product/smartphone-by-id/smartphone-by-id.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ErrorModule } from '../error/error.module';
import { BoxLastProductModule } from '../box-last-product/box-last-product.module';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [ProductsComponent, ProductComponent, DronesComponent, LaptopsComponent,
     SmartphonesComponent, DeleteProductComponent, EditProductComponent, DroneByIdComponent, LaptopByIdComponent, SmartphoneByIdComponent, AddProductComponent,
    ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CartModule,
    AuthModule,
    FormModule,
    ErrorModule,
    MatSnackBarModule,
    BoxLastProductModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
