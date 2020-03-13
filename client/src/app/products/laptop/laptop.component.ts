import { Component, OnInit } from '@angular/core';
import { ProductTestList } from 'src/app/client/model/productTestList';
import { ProductsService } from 'src/app/products/products.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

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
