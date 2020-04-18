import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/orderItem';
import { Order } from '../model/order';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient, private appService:AppService) { }

getAllOrders(){
  return this.http.get<Order[]>(this.appService.urlApi+"/orders/all")
}

getOrdersById(id:number){
  return this.http.get<Order>(this.appService.urlApi+"/orders/"+id)
}

getOrdersByUserId(id:number){
  return this.http.get<Order[]>(this.appService.urlApi+"/orders/user/"+id)
}

getOrderItemByOrderNumber(number:number){
  return this.http.get<OrderItem[]>(this.appService.urlApi+"/order/number/"+number)
}

createOrderItem(item:Partial<OrderItem>[]){
  return this.http.post<Number>(this.appService.urlAuth+"/order/create", item)
}

createOrder(order:Partial<Order>){
  return this.http.post(this.appService.urlAuth+"/orders/create", order)
}

editDetail(id:number, order:Partial<Order>){
  return this.http.put<Order>(this.appService.urlApi+"/orders/detail/"+id, order)// ----> remote
}

editAddress(id:number, order:Partial<Order>){
  return this.http.put<Order>(this.appService.urlApi+"/orders/address/"+id, order)
}

deleteOrder(id:number){
  return this.http.delete(this.appService.urlApi+"/orders/"+id)
}

}
