import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductTest } from '../model/productTest';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor() { 

  }

  ngOnInit() {
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartList))
    }
    this.cartList = JSON.parse(localStorage.getItem('products'))
    this.calculatePrice()
  }

  cartList:ProductTest[] = []
  cartSum:number

  @Input("addToCart")
  set setProduct(p){
    if(p){
    this.cartList.push(p)
    localStorage.setItem('products', JSON.stringify(this.cartList))
    this.calculatePrice()
    }  
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
  }

  calculatePrice(){
    var sum:number = 0
    this.cartList.forEach((i)=>{

      sum += i.product_price
    })
    this.cartSum = sum
  }

}
