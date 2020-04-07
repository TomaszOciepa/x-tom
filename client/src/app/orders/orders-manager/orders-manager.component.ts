import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { OrdersService } from '../orders.service';
import { Order } from 'src/app/model/order';
import { ThrowStmt } from '@angular/compiler';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orders-manager',
  templateUrl: './orders-manager.component.html',
  styleUrls: ['./orders-manager.component.css']
})
export class OrdersManagerComponent implements OnInit {

  constructor(public auth:AuthService, private ordersService:OrdersService, private router: Router) {
    this.auth.state.subscribe()
    
    this.ordersService.getAllOrders().subscribe(response =>{
        this.orders = response
    })

   }

  ngOnInit() {
  }

  orders:Order[]

  goOrder(order:Order){
    this.router.navigate(['/zamowienie-szczegoly'], { queryParams: {order_id: order.orders_id } });
  }
}
