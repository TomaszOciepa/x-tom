import { Component, OnInit, Input } from '@angular/core';
import { Drone } from '../client/model/drone';
import { ProductTest } from '../client/model/productTest';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

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
