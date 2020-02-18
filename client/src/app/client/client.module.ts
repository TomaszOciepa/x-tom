import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ProductsComponent } from './products/products.component';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DroneComponent } from './drone/drone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { AddDroneComponent } from './drone/add-drone/add-drone.component';




@NgModule({
  declarations: [
    ClientComponent,
    ProductsComponent,
    AddProductComponent,
    DroneComponent,
    LaptopComponent,
    SmartphoneComponent,
    AddDroneComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    ProfileModule,
    ReactiveFormsModule
  ],
  exports: [
    ClientComponent
  ]
})
export class ClientModule { }
