import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductTest } from 'src/app/model/productTest';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:ProductsService, private route:ActivatedRoute) {

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('product_id')
    })

    this.http.getById(this.id).subscribe(response =>{
      this.product = response
      this.productType = response.product_type
    })
   }
  
  id:number
  product:ProductTest
  productType:String
  productCart:ProductTest
  
  addtoCart(productCart){
    this.productCart = productCart
    console.log("właśnie dodałem: "+this.productCart.product_mark)
  }

  ngOnInit() {
  }

}
