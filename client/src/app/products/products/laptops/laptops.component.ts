import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductTest } from 'src/app/model/productTest';

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
    document.scrollingElement.scrollTop = 0
    
    this.getAllProduct()
  }

   statusError:number
   laptops:ProductTest[]

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
