import { Component, OnInit } from '@angular/core';
import { ProductTestList } from 'src/app/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  productsRecomend:ProductTestList
  productsPromotion:ProductTestList

  ngOnInit() {

    this.productsService.getByStatus("polecamy").subscribe(response =>{
      this.productsRecomend = response
    })

    this.productsService.getByStatus("promocja").subscribe(response =>{
      this.productsPromotion = response
    })

  }

}
