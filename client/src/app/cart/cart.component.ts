import { Component, OnInit, Input, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartItem } from '../model/cartItem';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartList))
    }
    this.cartList = JSON.parse(localStorage.getItem('products'))
    this.calculatePrice()
    this.checkCartIsEmpty()
  }
  
  selectProductForm = this.fb.group({    
    product_type: this.fb.control(''), 
  })

  cartList:CartItem[] = []
  cartSum:number
  isEmpty:boolean

  @Input("addToCart")
  set setProduct(p:CartItem){
    if(p){
    this.cartList.push(p)
    localStorage.setItem('products', JSON.stringify(this.cartList))
    this.calculatePrice()
    this.checkCartIsEmpty()
    }  
  }

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

  deleteItems(id){
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

}
