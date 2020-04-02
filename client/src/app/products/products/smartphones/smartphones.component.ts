import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { ProductTestList } from 'src/app/model/productTestList';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.css']
})
export class SmartphonesComponent implements OnInit {

  constructor(private http:ProductsService, protected auth:AuthService) {
    this.auth.state.subscribe()
   } 

   ngOnInit() {
    this.getAllProduct()
  }
  
  statusError:number
  smartphones:ProductTestList

   getAllProduct(){
    this.http.getByType("smartphone").subscribe(response =>{
      this.smartphones = response;
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })
   }




}
