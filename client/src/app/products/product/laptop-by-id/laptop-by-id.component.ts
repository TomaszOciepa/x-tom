import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { FormBuilder } from '@angular/forms';
import { ProductTest } from 'src/app/model/productTest';
import { CartItemLocalStorage } from 'src/app/model/cartItemLocalStorage';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'laptop-by-id',
  templateUrl: './laptop-by-id.component.html',
  styleUrls: ['./laptop-by-id.component.css']
})
export class LaptopByIdComponent implements OnInit {

  constructor(public auth:AuthService, private fb:FormBuilder, private snackbar:MatSnackBar) {
    this.auth.state.subscribe()
   }
   ngOnInit() {}

   id:number
   product:ProductTest
   amount:number = 1

   cartItem:CartItemLocalStorage = {
     order_item_id: 0,
    product: this.product,
    order_item_amount: 1  
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
    this.cartItem.order_item_amount = this.amount
    this.emiterSetProduct.emit(this.cartItem)

    this.snackbar.open('Dodano do koszyka','',{
      duration: 4000,
      verticalPosition:'top'
    })
  }



}
