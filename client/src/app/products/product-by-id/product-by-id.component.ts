import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'product-by-id',
  templateUrl: './product-by-id.component.html',
  styleUrls: ['./product-by-id.component.css']
})
export class ProductByIdComponent implements OnInit {

  constructor(private http:ProductsService, protected auth:AuthService, private route:ActivatedRoute) {
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
