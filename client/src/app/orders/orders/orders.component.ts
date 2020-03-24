import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { OrdersService } from '../orders.service';
import { Order } from 'src/app/model/order';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(protected auth:AuthService, private ordersService:OrdersService, private router: Router) { 
    this.auth.state.subscribe()

    if(this.auth.isAuthenticated){
      this.ordersService.getOrdersByUserId(this.auth.getCurrentUser().user_id).subscribe( response =>{
        this.userOrders = response
      })
    }

  }

  ngOnInit() {
  }

  userOrders:Order[]

  goOrder(order:Order){
    this.router.navigate(['/zamowienie-szczegoly'], { queryParams: {order_id: order.orders_id } });
  }

}
