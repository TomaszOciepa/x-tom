import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';
import { ProductTest } from 'src/app/client/model/productTest';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private http:ProductsService, private route:ActivatedRoute) { }

  productCart:ProductTest

  product = this.route.paramMap.pipe(
    map(params => +params.get('product_id')),
    switchMap(id => this.http.getById(id),)
  )
  
  addtoCart(productCart){
    this.productCart = productCart
    console.log("właśnie dodałem: "+this.productCart.product_mark)
  }

  ngOnInit() {
  }

}
