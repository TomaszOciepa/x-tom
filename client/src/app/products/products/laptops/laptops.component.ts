import { Component, OnInit } from '@angular/core';
import { ProductTestList } from 'src/app/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {

  constructor(private http:ProductsService, protected auth:AuthService) {
    this.auth.state.subscribe()
   }

   laptops:ProductTestList

   getAllLaptops(){
    this.http.getByType("laptop").subscribe(response =>{
      this.laptops = response;
    })
   }


  ngOnInit() {
    this.getAllLaptops()
  }

}
