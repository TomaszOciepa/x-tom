import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersComponent } from './orders/orders.component';
import { AuthModule } from '../auth/auth.module';
import { OrderComponent } from './order/order.component';
import { FormModule } from '../form/form.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { CartModule } from '../cart/cart.module';
import { OrderSumaryComponent } from './order-sumary/order-sumary.component';
import { OrdersManagerComponent } from './orders-manager/orders-manager.component';





@NgModule({
  declarations: [OrdersComponent, OrderComponent, AddOrderComponent, OrderSumaryComponent, OrdersManagerComponent,],
  imports: [
    CommonModule,
    AuthModule,
    FormModule,
    CartModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
