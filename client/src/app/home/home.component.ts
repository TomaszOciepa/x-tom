import { Component, OnInit } from '@angular/core';
import { ProductTestList } from 'src/app/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductList } from '../model/productList';
import { ProductTest } from '../model/productTest';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  productsRecomendList1:ProductTest[] = []
  productsRecomendList2:ProductTest[] = []
  productsRecomendList3:ProductTest[] = []

  productsPromotion:ProductTest[] = []

  statusError:number
  

  ngOnInit() {

    this.productsService.getByStatus("polecamy").subscribe(response =>{
        console.log("list size: "+response.length)
      for(var i = 0; i <= response.length -1; i++){

        if(i <=2){
          this.productsRecomendList1.push(response[i])
        }

        if(i >= 3 && i <=5){
          this.productsRecomendList2.push(response[i]) 
        } 
        
        if(i >= 6 && i <=8){
          this.productsRecomendList3.push(response[i])
        }

      }
      
      console.log('List 1: '+this.productsRecomendList1.length)
      console.log('List 2: '+this.productsRecomendList2.length)
      console.log('List 3: '+this.productsRecomendList3.length)


    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })

    

    this.productsService.getByStatus("promocja").subscribe(response =>{
      
      for(var i = 0; i <= response.length -1; i++){
        if(i <=1){
          this.productsPromotion.push(response[i])
        }  
        
      }
      
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })

  }
  
}
