import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/orderItem';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  getAllOrders(){
    return this.http.get<Order[]>("http://localhost:8080/orders/all")
  }

  getOrdersById(id:number){
    return this.http.get<Order>("http://localhost:8080/orders/"+id)
  }

  getOrdersByUserId(id:number){
    return this.http.get<Order[]>("http://localhost:8080/orders/user/"+id)
  }

  getOrderItemByOrderNumber(number:number){
    return this.http.get<OrderItem[]>("http://localhost:8080/order/number/"+number)
  }

  createOrderItem(item:Partial<OrderItem>[]){
    return this.http.post<Number>("http://localhost:8090/order/create", item)
  }

  createOrder(order:Partial<Order>){
    return this.http.post("http://localhost:8090/orders/create", order)
  }

  editDetail(id:number, order:Partial<Order>){
    return this.http.put<Order>("http://localhost:8080/orders/detail/"+id, order)
  }

  editAddress(id:number, order:Partial<Order>){
    return this.http.put<Order>("http://localhost:8080/orders/address/"+id, order)
  }
}
