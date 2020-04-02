import { Component, OnInit } from '@angular/core';
import { ProductTestList } from 'src/app/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  productsRecomend:ProductTestList
  productsPromotion:ProductTestList

  statusError:number
  

  ngOnInit() {

    this.productsService.getByStatus("polecamy").subscribe(response =>{
      this.productsRecomend = response
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })

    this.productsService.getByStatus("promocja").subscribe(response =>{
      this.productsPromotion = response
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })

  }
  
}
