import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

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

   deleteDrone(id: number){
    console.log("Usuwm product HAHAHA "+id)
  }

  @Output('addToCart')
  emiterSetProduct = new EventEmitter()

  addToCart(product){
    console.log("dodałem: "+product.product_id)
    this.emiterSetProduct.emit(product)
  }

  ngOnInit() {
  }

}
