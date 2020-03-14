import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { AddDroneComponent } from './products/drones/add-drone/add-drone.component';
import { AddLaptopComponent } from './products/laptops/add-laptop/add-laptop.component';
import { AddSmartphoneComponent } from './products/smartphones/add-smartphone/add-smartphone.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';

const routes: Routes = [
  {
    path:'products/:product_type',
    component:  ProductsComponent
  },
  {
    path: 'product/:product_id',
    component: ProductComponent
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
    path: 'add-drone',
    component: AddDroneComponent
  },
  {
    path: 'add-laptop',
    component: AddLaptopComponent
  },
  {
    path: 'add-smartphone',
    component: AddSmartphoneComponent
  },
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
