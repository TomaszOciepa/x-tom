import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrdersService } from '../orders.service';
import { OrderItem } from 'src/app/model/orderItem';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private route:ActivatedRoute, private ordersService:OrdersService, public auth:AuthService) {
    this.auth.state.subscribe()

    this.route.queryParams.subscribe(param =>{
      this.orderId = param['order_id']
    })
    
    this.ordersService.getOrdersById(this.orderId).subscribe(response =>{
      this.order = response

      this.ordersService.getOrderItemByOrderNumber(response.orders_number).subscribe(items =>{
        this.orderItem = items
      })
    })
    
   }

  ngOnInit() {
    
  }

  orderId:number
  order:Order
  orderItem:OrderItem[]
}
