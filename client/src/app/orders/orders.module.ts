import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersRoutingModule } from './orders.routing.module';
import { OrdersComponent } from './orders/orders.component';
import { AuthModule } from '../auth/auth.module';




@NgModule({
  declarations: [OrdersComponent],
  imports: [
    CommonModule,
    AuthModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
