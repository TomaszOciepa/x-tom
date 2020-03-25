import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderDetailFormComponent } from './order-detail-form/order-detail-form.component';
import { OrderAddressFormComponent } from './order-address-form/order-address-form.component';

const routes: Routes = [
  {
    path: 'edit-order-detail/:order_id',
    component: OrderDetailFormComponent
  },
  {
    path: 'edit-order-address/:order_id',
    component: OrderAddressFormComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
})

export class FormRoutingModule { }
