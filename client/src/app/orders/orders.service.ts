import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/orderItem';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }


  createOrderItem(item:Partial<OrderItem>[]){
    return this.http.post<Number>("http://localhost:8090/order/create", item)
  }

  createOrder(order:Partial<Order>){
    return this.http.post("http://localhost:8090/orders/create", order)
  }
}
