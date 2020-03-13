import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { ProductTestList } from 'src/app/client/model/productTestList';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  constructor(private http:ProductsService, protected auth:AuthService) {
    this.auth.state.subscribe()
   }

   smartphones:ProductTestList

   getAllDrones(){
    this.http.getByType("smartphone").subscribe(response =>{
      this.smartphones = response;
    })
   }


  ngOnInit() {
    this.getAllDrones()
  }

}
