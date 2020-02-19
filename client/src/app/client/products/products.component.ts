import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductList } from '../model/productList';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: ProductList

  search(query){
    this.http.searchByDescription(query).subscribe(response =>{
      this.productsList = response
    })
  }

  getAllProducts(){
    this.http.getAll().subscribe(response =>{
      this.productsList = response;
    })
  }



  constructor(private http: ProductsService, protected auth:AuthService) {
    this.auth.state.subscribe()
   }

  ngOnInit() {
    // this.getAllProducts()
  }

}
