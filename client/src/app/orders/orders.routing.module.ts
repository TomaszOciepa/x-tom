import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './orders/orders.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';

const routes: Routes = [
  {
    path:'moje-zamowienia',
    component:  OrdersComponent
  },
  {
    path:'zamowienie',
    component:  AddOrderComponent
  },
  {
    path:'podsumowanie',
    component:  OrderSumaryComponent
  },
]

// path: 'product/:product_id',

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class OrdersRoutingModule { }
