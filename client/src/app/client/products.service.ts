import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductList } from './model/productList';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ProductList>("http://localhost:8090/product/all")
  }
}
