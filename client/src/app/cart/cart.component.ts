import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductTest } from '../model/productTest';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartList:ProductTest[] = []

  @Input("addToCart")
  set setProduct(p){
    if(p){
      this.cartList.push(p)
    localStorage.setItem('products', JSON.stringify(this.cartList))
    }
    
  }
  
  constructor() { 

  }

  ngOnInit() {
    console.log('siema init cart')
    
    console.log("storage after: "+localStorage.getItem('products'))
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartList))
    }
    console.log("storage before: "+localStorage.getItem('products'))
    this.cartList = JSON.parse(localStorage.getItem('products'))
    
  }

}
