import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ProductList } from './model/productList';
import { Product } from './model/product';
import { AuthService } from '../auth/auth.service';
import { catchError } from 'rxjs/operators';
import { empty } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private auth:AuthService) { }

  getAll(){
    return this.http.get<ProductList>("http://localhost:8090/product/all")
  }


  create(product:Partial<Product>){
    return this.http.post<Product>("http://localhost:8080/product/create", product)
  }

  searchByDescription(query){
    return this.http.get<ProductList>("http://localhost:8090/product/",{
      params:{
        query:query
      }
    })
  }
}
