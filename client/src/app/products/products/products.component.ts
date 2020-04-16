import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private route:ActivatedRoute) {
    this.route.paramMap.subscribe(params =>{
      this.productType = params.get('product_type')
    })
   }

  productType:String

  ngOnInit() {
    document.scrollingElement.scrollTop = 0
  }

}
