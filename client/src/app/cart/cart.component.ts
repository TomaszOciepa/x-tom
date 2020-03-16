import { Component, OnInit, Input } from '@angular/core';
import { ProductTest } from '../model/productTest';


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  product = []

  @Input("addToCart")
  set setProduct(p:ProductTest){
    this.product.push(p)
    if(p){
      console.log("dodany: "+p.product_mark)
    }
    
  }
  
  constructor() { }

  ngOnInit() {
    
  }

}
