import { Component, OnInit, Input, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartItem } from '../model/cartItem';
import { AuthService } from '../auth/auth.service';
import { CartService } from './cart.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(protected auth:AuthService, private cartService:CartService ,private fb:FormBuilder) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {
    console.log("siema cart")
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartList))
    }

    if(this.auth.isAuthenticated){
      this.getMyCartWithDatabase()
    }else{
      this.cartList = JSON.parse(localStorage.getItem('products'))
    }
    
      this.checkCartIsEmpty()
      this.calculatePrice()
  }
  
  selectProductForm = this.fb.group({    
    product_type: this.fb.control(''), 
  })

  cartList:CartItem[] = []
  cartSum:number
  isEmpty:boolean

  checkCartIsEmpty(){
    if(this.cartList.length > 0){
      this.isEmpty = false
    }else if(this.cartList.length == 0){
      this.isEmpty = true
    }
  }

  calculatePrice(){
    var sum:number = 0
    this.cartList.forEach((i)=>{
      sum += (i.product.product_price * i.amount)
    })
    this.cartSum = sum
  }

  deleteCartItemInLocalStorage(id){
    delete this.cartList[id]
    var newFavorit =[]
    this.cartList.forEach((index)=>{
      if(id !== index){
          newFavorit.push(index)
      }
    })
    this.cartList = newFavorit
    localStorage.setItem('products', JSON.stringify(this.cartList))
    this.calculatePrice()
    this.checkCartIsEmpty()
  }

  removeCartInLocalStorage(){
    this.cartList = []
    localStorage.setItem('products', JSON.stringify(this.cartList))
    this.checkCartIsEmpty()
    console.log("wyczyszczono koszyk :)")
  }

  getMyCartWithDatabase(){
    this.cartService.getMyCartItems() // pobieram
                                        // zapisuje do localStorage
  }

  deleteCartItemInDatabase(idDatabase, idList){
    this.cartService.deleteMyCartItem()
    this.deleteCartItemInLocalStorage(idList)
  }
}
