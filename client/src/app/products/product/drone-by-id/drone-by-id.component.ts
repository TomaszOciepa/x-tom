import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ProductTest } from 'src/app/model/productTest';

@Component({
  selector: 'drone-by-id',
  templateUrl: './drone-by-id.component.html',
  styleUrls: ['./drone-by-id.component.css']
})
export class DroneByIdComponent implements OnInit {

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

  addToCart(product:ProductTest){
    this.emiterSetProduct.emit(product)
  }

  ngOnInit() {
  }

}
