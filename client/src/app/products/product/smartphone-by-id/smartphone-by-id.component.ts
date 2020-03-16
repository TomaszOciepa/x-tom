import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'smartphone-by-id',
  templateUrl: './smartphone-by-id.component.html',
  styleUrls: ['./smartphone-by-id.component.css']
})
export class SmartphoneByIdComponent implements OnInit {

  constructor(protected auth:AuthService) {
    this.auth.state.subscribe()
   }

   product

   id:number

   @Input("getProduct")
   set getId(product){
     this.product = product
   }

  @Output('addToCart')
  emiterSetProduct = new EventEmitter()

  addToCart(product){
    this.emiterSetProduct.emit(product)
  }

  ngOnInit() {
  }

}
