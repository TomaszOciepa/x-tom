import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getMyCartItems(){
    console.log("pobieram koszyk z bazy :)")
  }
  setMyCartItem(){
    console.log("zapisuje pozycje z koszyka do bazy :)")
  }

  deleteMyCartItem(){
    console.log("usunełem pozycje z koszyka w bazie :)")
  }

  deleteMyCart(){
    console.log("usunełem koszyk z bazy :)")
  }
}
