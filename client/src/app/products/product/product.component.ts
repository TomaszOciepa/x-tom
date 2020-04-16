import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductTest } from 'src/app/model/productTest';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { CartItemLocalStorage } from 'src/app/model/cartItemLocalStorage';
import { CartItemUser } from 'src/app/model/cartItemUser';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(public auth:AuthService, private http:ProductsService, private cartService:CartService, private route:ActivatedRoute) {

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('product_id')
    })
    
    this.http.getById(this.id).subscribe(response =>{
      this.product = response

      this.setLastProduct(response)

      this.productType = response.product_type
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })

   }

   ngOnInit() {
    document.scrollingElement.scrollTop = 0
    
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartLocalItemList))
    }else{
      this.cartLocalItemList = JSON.parse(localStorage.getItem('products'))  
    }

  }
  
  statusError:number
  error
  id:number
  product:ProductTest
  productType:String  
  cartLocalItemList:CartItemLocalStorage[] = []
  lastProduct:ProductTest[] = []
  

  cartUserItem:CartItemUser = {
    order_item_amount: 0,
    product: this.product,
    user: this.auth.getCurrentUser()
  }

  addtoCart(cartItem:CartItemLocalStorage){
    
    if(this.auth.isAuthenticated){
      this.cartUserItem.order_item_amount = cartItem.order_item_amount
      this.cartUserItem.product = cartItem.product
      this.cartUserItem.user = this.auth.getCurrentUser()

      this.cartService.setMyCartItem(this.cartUserItem).subscribe(()=>{
    },err=>{
      this.error = err.message
    })
    }else{
      this.cartLocalItemList.push(cartItem)
      localStorage.setItem('products', JSON.stringify(this.cartLocalItemList))
    }
    
  }

  setLastProduct(product:ProductTest){
    var lastProduct:ProductTest[] = []
    
    if(localStorage.getItem('lastProduct') == null){
      lastProduct.push(product)
      localStorage.setItem('lastProduct', JSON.stringify(lastProduct))
    }else{
        lastProduct = JSON.parse(localStorage.getItem('lastProduct'))
        var newList:ProductTest[] = []

        newList.push(product)
        for(var i = 0; i <= 5; i++){
          if(lastProduct[i] != null && newList.length < 6)
          newList[i+1] = lastProduct[i]
        }
          localStorage.setItem('lastProduct', JSON.stringify(newList))
    }

    

  }

}
