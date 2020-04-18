import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItemUser } from '../model/cartItemUser';
import { CartItemLocalStorage } from '../model/cartItemLocalStorage';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

constructor(private http: HttpClient, private appService:AppService) { }

getMyCartItems(id:number){
  return this.http.get<CartItemLocalStorage[]>(this.appService.urlApi+"/cart/"+id)
}

setMyCartItem(cartItem:Partial<CartItemUser>){
  return this.http.post<CartItemUser>(this.appService.urlApi+"/cart/create", cartItem)
}

deleteMyCartItem(id:number){
  return this.http.delete(this.appService.urlApi+"/cart/"+id)
}

deleteMyCart(id:number){
  return this.http.delete(this.appService.urlApi+"/cart/clear/"+id)
}

}
