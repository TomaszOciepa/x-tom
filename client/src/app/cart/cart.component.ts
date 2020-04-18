import { Component, OnInit, Input, Output, EventEmitter, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { CartService } from './cart.service';
import { CartItemLocalStorage } from '../model/cartItemLocalStorage';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(public auth:AuthService, private cartService:CartService ,private fb:FormBuilder) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {
    document.scrollingElement.scrollTop = 0
    
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartLocalItemList))  
    }
    
    if(this.auth.isAuthenticated){
      this.getMyCartWithDatabase()
    }else{
      this.cartLocalItemList = JSON.parse(localStorage.getItem('products'))
    }
    
    this.checkCartIsEmpty()
    this.calculatePrice()
    this.setOrderItem()
  }
  
  selectProductForm = this.fb.group({    
    product_type: this.fb.control(''), 
  })

  cartLocalItemList:CartItemLocalStorage[] = []

  statusError:number
  cartSum:number
  isEmpty:boolean
  error: boolean
  pathOrder:boolean = false
  
  @Input("setPathOrder")
  set path(path:boolean){
    this.pathOrder = path
  }
  
  @Output('setOrderItem')
  emiterSetItem = new EventEmitter()
  
  setOrderItem(){
    this.emiterSetItem.emit(this.cartLocalItemList)
  }

  checkCartIsEmpty(){
    if(this.cartLocalItemList.length > 0){
      this.isEmpty = false
    }else if(this.cartLocalItemList.length == 0){
      this.isEmpty = true
    }
  }

  calculatePrice(){
    var sum:number = 0
    this.cartLocalItemList.forEach((i)=>{
      sum += (i.product.product_price * i.order_item_amount)
    })
    this.cartSum = sum
  }

  deleteCartItemInLocalStorage(id){
    delete this.cartLocalItemList[id]
    var newFavorit =[]
    this.cartLocalItemList.forEach((index)=>{
      if(id !== index){
          newFavorit.push(index)
      }
    })
    this.cartLocalItemList = newFavorit
    if(!this.auth.isAuthenticated){
      localStorage.setItem('products', JSON.stringify(this.cartLocalItemList))
    }
    
    this.calculatePrice()
    this.checkCartIsEmpty()
  }

  removeCartInLocalStorage(){
    this.cartLocalItemList = []
    localStorage.setItem('products', JSON.stringify(this.cartLocalItemList))
    this.checkCartIsEmpty()
  }

  getMyCartWithDatabase(){
    
    if(this.auth.getCurrentUser()){
      this.cartService.getMyCartItems(this.auth.getCurrentUser().user_id).subscribe(

        response =>{
          
            response.forEach((item)=>{
              this.cartLocalItemList.push(item)    
            })
  
            this.cartLocalItemList.forEach((i)=>{
            })
            this.checkCartIsEmpty()
            this.calculatePrice()
            
        }
      )
    }    

  }

  deleteCartItemInDatabase(idInDatabase, idInList){
    this.cartService.deleteMyCartItem(idInDatabase).subscribe(()=>{
        console.log("Success")
      },err=>{
        this.error = err.message
      })

      this. deleteCartItemInLocalStorage(idInList)
  }

  removeCartInDatabase(){
    this.cartService.deleteMyCart(this.auth.getCurrentUser().user_id).subscribe(()=>{
    },err=>{
      this.error = err.message
    })
    this.cartLocalItemList = []
    this.checkCartIsEmpty()
  }

}
