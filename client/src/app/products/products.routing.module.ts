import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductByIdComponent } from './product-by-id/product-by-id.component';
import { ProductComponent } from './product/product.component';
import { DroneComponent } from './drone/drone.component';
import { LaptopComponent } from './laptop/laptop.component';
import { SmartphoneComponent } from './smartphone/smartphone.component';
import { AddDroneComponent } from './drone/add-drone/add-drone.component';
import { AddLaptopComponent } from './laptop/add-laptop/add-laptop.component';
import { AddSmartphoneComponent } from './smartphone/add-smartphone/add-smartphone.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path:'products',
    component:  ProductsComponent
  },
  {
    path: 'product/:product_id',
    component: ProductComponent
  },
  {
    path: 'productById/:product_id',
    component: ProductByIdComponent
  },
  {
    path: 'edit-product/:product_id',
    component: EditProductComponent
  },
  {
    path: 'delete-product/:product_id',
    component: DeleteProductComponent
  },
  {
    path: 'drones',
    component: DroneComponent
  },
  {
    path: 'add-drone',
    component: AddDroneComponent
  },
  {
    path: 'laptops',
    component: LaptopComponent
  },
  {
    path: 'add-laptop',
    component: AddLaptopComponent
  },
  {
    path: 'smartphones',
    component: SmartphoneComponent
  },
  {
    path: 'add-smartphone',
    component: AddSmartphoneComponent
  },
  // {
  //   path: 'edit-user/:user_id',
  //   component: EditUserComponent
  // },
  // {
  //   path: 'delete-user/:user_id',
  //   component: DeleteUserComponent
  // }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class ProductsRoutingModule { }
