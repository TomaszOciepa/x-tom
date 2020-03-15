import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AddProductComponent } from './add-product/add-product.component';

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
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'edit-product/:product_id',
    component: EditProductComponent
  },
  {
    path: 'delete-product/:product_id',
    component: DeleteProductComponent
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
