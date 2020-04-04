import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderItem } from '../model/orderItem';
import { Order } from '../model/order';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  // ---> localhost
  getAllOrders(){
    return this.http.get<Order[]>("http://localhost:8080/orders/all")
  }

// ----> remote
// getAllOrders(){
//   return this.http.get<Order[]>("https://x-tom-api.herokuapp.com/orders/all")
// }
 
  // ---> localhost
  getOrdersById(id:number){
    return this.http.get<Order>("http://localhost:8080/orders/"+id)
  }

// ----> remote
// getOrdersById(id:number){
//   return this.http.get<Order>("https://x-tom-api.herokuapp.com/orders/"+id)
// }

  // ---> localhost
  getOrdersByUserId(id:number){
    return this.http.get<Order[]>("http://localhost:8080/orders/user/"+id)
  }

// ----> remote
// getOrdersByUserId(id:number){
//   return this.http.get<Order[]>("https://x-tom-api.herokuapp.com:8080/orders/user/"+id)
// }

  // ---> localhost
  getOrderItemByOrderNumber(number:number){
    return this.http.get<OrderItem[]>("http://localhost:8080/order/number/"+number)
  }

// ----> remote
// getOrderItemByOrderNumber(number:number){
//   return this.http.get<OrderItem[]>("https://x-tom-api.herokuapp.com/order/number/"+number)
// }

  // ---> localhost
  createOrderItem(item:Partial<OrderItem>[]){
    return this.http.post<Number>("http://localhost:8090/order/create", item)
  }

// ----> remote
// createOrderItem(item:Partial<OrderItem>[]){
//   return this.http.post<Number>("https://x-tom-auth.herokuapp.com/order/create", item)
// }

  // ---> localhost
  createOrder(order:Partial<Order>){
    return this.http.post("http://localhost:8090/orders/create", order)
  }

// ----> remote
// createOrder(order:Partial<Order>){
//   return this.http.post("https://x-tom-auth.herokuapp.com/orders/create", order)
// }

  // ---> localhost
  editDetail(id:number, order:Partial<Order>){
    return this.http.put<Order>("http://localhost:8080/orders/detail/"+id, order)// ----> remote
  }

// ----> remote
// editDetail(id:number, order:Partial<Order>){
//   return this.http.put<Order>("https://x-tom-api.herokuapp.com/orders/detail/"+id, order)// ----> remote
// }

  // ---> localhost
  editAddress(id:number, order:Partial<Order>){
    return this.http.put<Order>("http://localhost:8080/orders/address/"+id, order)
  }

// ----> remote
// editAddress(id:number, order:Partial<Order>){
//   return this.http.put<Order>("https://x-tom-api.herokuapp.com/orders/address/"+id, order)
// }

  // ---> localhost
  deleteOrder(id:number){
    return this.http.delete("http://localhost:8080/orders/"+id)
  }

  // ----> remote
  // deleteOrder(id:number){
  //   return this.http.delete("https://x-tom-api.herokuapp.com/orders/"+id)
  // }

}
