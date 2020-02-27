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
import { AddLaptopComponent } from './laptop/add-laptop/add-laptop.component';
import { AddSmartphoneComponent } from './smartphone/add-smartphone/add-smartphone.component';
import { ProductsRoutingModule } from './products/products.routing.module';
import { DroneRoutingModule } from './drone/drone.routing.module';
import { LaptopRoutingModule } from './laptop/laptop.routing.module';
import { SmartphoneRoutingModule } from './smartphone/smartphone.routing.module';






@NgModule({
  declarations: [
    ClientComponent,
    ProductsComponent,
    AddProductComponent,
    DroneComponent,
    LaptopComponent,
    SmartphoneComponent,
    AddDroneComponent,
    AddLaptopComponent,
    AddSmartphoneComponent,
  ],
  imports: [
    ProductsRoutingModule,
    DroneRoutingModule,
    LaptopRoutingModule,
    SmartphoneRoutingModule,
    CommonModule,
    AuthModule,
    ProfileModule,
    ReactiveFormsModule,
  ],
  exports: [
    ClientComponent,
  ]
})
export class ClientModule { }
