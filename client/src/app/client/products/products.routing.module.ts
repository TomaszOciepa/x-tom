import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products.component';
<<<<<<< HEAD
import { AddProductComponent } from './add-product/add-product.component';
=======
>>>>>>> routing


const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent
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
