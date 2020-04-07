import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { ProductTestList } from 'src/app/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';
import { HttpErrorResponse } from '@angular/common/http';


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
  }

   statusError:number
   drones:ProductTestList

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
