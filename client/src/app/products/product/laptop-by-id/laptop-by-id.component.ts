import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { ProductTest } from 'src/app/model/productTest';
import { CartItem } from 'src/app/model/cartItem';

@Component({
  selector: 'laptop-by-id',
  templateUrl: './laptop-by-id.component.html',
  styleUrls: ['./laptop-by-id.component.css']
})
export class LaptopByIdComponent implements OnInit {

  constructor(protected auth:AuthService, private fb:FormBuilder) {
    this.auth.state.subscribe()
   }
   ngOnInit() {}

   id:number
   product:ProductTest
   cart = true
   amount:number = 1

   cartItem:CartItem = {
    product: this.product,
    amount: 1  
  }
  
  addProductForm = this.fb.group({    
    amount: this.fb.control('')
  })

   @Input("getProduct")
   set getId(product){
     this.product = product
   }

  @Output('addToCart')
  emiterSetProduct = new EventEmitter()

  addToCart(product:ProductTest){
    this.cartItem.product = product
    this.cartItem.amount = this.amount
    this.emiterSetProduct.emit(this.cartItem)
    this.cart = false
  }



}
