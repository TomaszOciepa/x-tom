import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ProductList } from '../model/productList';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsList: ProductList

  getAllProducts(){
    this.http.getAll().subscribe(response =>{
      this.productsList = response;
    })
  }

  constructor(private http: ProductsService) { }

  ngOnInit() {
    this.getAllProducts()
  }

}
