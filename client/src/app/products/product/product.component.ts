import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductTest } from 'src/app/model/productTest';
import { CartItem } from 'src/app/model/cartItem';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  constructor(protected auth:AuthService,private http:ProductsService, private route:ActivatedRoute) {

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('product_id')
    })
    
    this.http.getById(this.id).subscribe(response =>{
      this.product = response
      this.productType = response.product_type
    })

   }

   ngOnInit() {
    if(localStorage.getItem('products') == null){
      localStorage.setItem('products', JSON.stringify(this.cartList))
    }
    this.cartList = JSON.parse(localStorage.getItem('products'))
  }

  id:number
  product:ProductTest
  productType:String  
  cartList:CartItem[] = []

  addtoCart(selectedProduct:CartItem){
    this.cartList.push(selectedProduct)
    localStorage.setItem('products', JSON.stringify(this.cartList))
  }

}
