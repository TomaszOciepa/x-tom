import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItemUser } from '../model/cartItemUser';
import { CartItemLocalStorage } from '../model/cartItemLocalStorage';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getMyCartItems(id:number){
    return this.http.get<CartItemLocalStorage[]>("http://localhost:8080/cart/"+id)
  }

  setMyCartItem(cartItem:Partial<CartItemUser>){
    return this.http.post<CartItemUser>("http://localhost:8080/cart/create", cartItem)
  }

  deleteMyCartItem(id:number){
    return this.http.delete("http://localhost:8080/cart/"+id)
  }

  deleteMyCart(id:number){
    return this.http.delete("http://localhost:8080/cart/clear/"+id)
  }
}
