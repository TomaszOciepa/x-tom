import { Component, OnInit } from '@angular/core';
import { ProductTestList } from 'src/app/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private http:ProductsService, public auth:AuthService) {
    this.auth.state.subscribe()
   }
  
  ngOnInit() {
    this.getAllProduct()
  }

   statusError:number
   laptops:ProductTestList

   getAllProduct(){
    this.http.getByType("laptop").subscribe(response =>{
      this.laptops = response;
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })
   }

}
