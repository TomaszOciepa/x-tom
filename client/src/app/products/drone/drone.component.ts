import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/auth/auth.service';
import { ProductTestList } from 'src/app/client/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';


@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.css']
})
export class DroneComponent implements OnInit {

  constructor(private http:ProductsService, protected auth:AuthService) {
    this.auth.state.subscribe()
   }

   drones:ProductTestList

   getAllDrones(){
    this.http.getByType("drone").subscribe(response =>{
      this.drones = response;
    })
   }


  ngOnInit() {
    this.getAllDrones()
  }

}
