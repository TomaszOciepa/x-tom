import { Component, OnInit, Input } from '@angular/core';
import { Drone } from '../client/model/drone';

@Component({
  selector: 'basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  product = []

  @Input("addToCart")
  set setProduct(p:Drone){
    this.product.push(p)
    if(p){
      console.log("dodany: "+p.drone_mark)
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}
