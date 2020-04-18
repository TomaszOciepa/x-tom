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
import { OrdersDeleteComponent } from './orders-delete/orders-delete.component';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [OrdersComponent, OrderComponent, AddOrderComponent, OrderSumaryComponent, OrdersManagerComponent, OrdersDeleteComponent,],
  imports: [
    CommonModule,
    AuthModule,
    FormModule,
    ErrorModule,
    CartModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
