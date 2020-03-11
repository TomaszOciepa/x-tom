import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import { ProductsComponent } from './products/products.component';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { AddDroneComponent } from './drone/add-drone/add-drone.component';
import { AddLaptopComponent } from './laptop/add-laptop/add-laptop.component';
import { AddSmartphoneComponent } from './smartphone/add-smartphone/add-smartphone.component';
import { ProductsRoutingModule } from './products/products.routing.module';
import { DroneRoutingModule } from './drone/drone.routing.module';
import { LaptopRoutingModule } from './laptop/laptop.routing.module';
import { SmartphoneRoutingModule } from './smartphone/smartphone.routing.module';
import { DroneByIdComponent } from './drone/drone-by-id/drone-by-id.component';
import { LaptopByIdComponent } from './laptop/laptop-by-id/laptop-by-id.component';
import { SmartphoneByIdComponent } from './smartphone/smartphone-by-id/smartphone-by-id.component';
import { DeleteDroneComponent } from './drone/delete-drone/delete-drone.component';
import { EditDroneComponent } from './drone/edit-drone/edit-drone.component';
import { DeleteLaptopComponent } from './laptop/delete-laptop/delete-laptop.component';
import { EditLaptopComponent } from './laptop/edit-laptop/edit-laptop.component';
import { DeleteSmartphoneComponent } from './smartphone/delete-smartphone/delete-smartphone.component';
import { EditSmartphoneComponent } from './smartphone/edit-smartphone/edit-smartphone.component';
import { BasketModule } from '../basket/basket.module';
import { DronesComponent } from './drone/drones.component';
import { DroneComponent } from './drone/drone/drone.component';


@NgModule({
  declarations: [
    ClientComponent,
    ProductsComponent,
    AddProductComponent,
    DronesComponent,
    LaptopComponent,
    SmartphoneComponent,
    AddDroneComponent,
    AddLaptopComponent,
    AddSmartphoneComponent,
    DroneByIdComponent,
    LaptopByIdComponent,
    SmartphoneByIdComponent,
    DeleteDroneComponent,
    EditDroneComponent,
    DeleteLaptopComponent,
    EditLaptopComponent,
    DeleteSmartphoneComponent,
    EditSmartphoneComponent,
    DroneComponent,
  ],
  imports: [
    ProductsRoutingModule,
    DroneRoutingModule,
    LaptopRoutingModule,
    SmartphoneRoutingModule,
    CommonModule,
    AuthModule,
    ProfileModule,
    BasketModule,
    ReactiveFormsModule,
  ],
  exports: [
    ClientComponent,  AddDroneComponent, DronesComponent, DeleteDroneComponent, 
    EditDroneComponent, DeleteLaptopComponent, EditLaptopComponent, DeleteSmartphoneComponent, 
    EditSmartphoneComponent, DroneComponent
  ]
})
export class ClientModule { }
