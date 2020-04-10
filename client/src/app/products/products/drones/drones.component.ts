import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductTest } from 'src/app/model/productTest';


@Component({
  selector: 'drones',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css']
})
export class DronesComponent implements OnInit {

  constructor(private http:ProductsService, public auth:AuthService) {
    this.auth.state.subscribe()
   }

  ngOnInit() {
    this.getAllProduct()
    console.log("pozycja: "+window.scrollY)
    document.scrollingElement.scrollTop = 0
    
    
  }

   statusError:number
   drones:ProductTest[]

   getAllProduct(){
    this.http.getByType("drone").subscribe(response =>{
      this.drones = response;
    },error =>{
      if(error instanceof HttpErrorResponse){
        this.statusError = error.status
        console.error(error.error)
      }
    })
   }

}
