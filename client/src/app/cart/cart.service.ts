import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CartItemUser } from '../model/cartItemUser';
import { CartItemLocalStorage } from '../model/cartItemLocalStorage';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  // ---> localhost
  // getMyCartItems(id:number){
  //   return this.http.get<CartItemLocalStorage[]>("http://localhost:8080/cart/"+id)
  // }

  // ----> remote
  // getMyCartItems(id:number){
  //   return this.http.get<CartItemLocalStorage[]>("https://x-tom-api.herokuapp.com/cart/"+id)
  // }

    // ----> remote aws
    getMyCartItems(id:number){
      return this.http.get<CartItemLocalStorage[]>("http://ec2-3-127-233-248.eu-central-1.compute.amazonaws.com:8080/cart/"+id)
    }

  // ---> localhost
  // setMyCartItem(cartItem:Partial<CartItemUser>){
  //   return this.http.post<CartItemUser>("http://localhost:8080/cart/create", cartItem)
  // }

  // ----> remote
  // setMyCartItem(cartItem:Partial<CartItemUser>){
  //   return this.http.post<CartItemUser>("https://x-tom-api.herokuapp.com/cart/create", cartItem)
  // }

// ----> remote aws
setMyCartItem(cartItem:Partial<CartItemUser>){
  return this.http.post<CartItemUser>("http://ec2-3-127-233-248.eu-central-1.compute.amazonaws.com:8080/cart/create", cartItem)
}

  // ---> localhost
  // deleteMyCartItem(id:number){
  //   return this.http.delete("http://localhost:8080/cart/"+id)
  // }

  // ----> remote
  // deleteMyCartItem(id:number){
  //   return this.http.delete("https://x-tom-api.herokuapp.com/cart/"+id)
  // }

  // ----> remote aws
  deleteMyCartItem(id:number){
    return this.http.delete("http://ec2-3-127-233-248.eu-central-1.compute.amazonaws.com:8080/cart/"+id)
  }

  // ---> localhost
  // deleteMyCart(id:number){
  //   return this.http.delete("http://localhost:8080/cart/clear/"+id)
  // }

  // ----> remote
  // deleteMyCart(id:number){
  //   return this.http.delete("https://x-tom-api.herokuapp.com/cart/clear/"+id)
  // }

// ----> remote aws
deleteMyCart(id:number){
  return this.http.delete("http://ec2-3-127-233-248.eu-central-1.compute.amazonaws.com:8080/cart/clear/"+id)
}

}
