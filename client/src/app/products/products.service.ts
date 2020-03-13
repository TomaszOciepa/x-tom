import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductTestList } from '../client/model/productTestList';
import { ProductTest } from '../client/model/productTest';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<ProductTestList>("http://localhost:8090/product/all")
  }

  create(product:Partial<ProductTest>){
    return this.http.post<ProductTest>("http://localhost:8080/product/create", product)
  }

  getById(id:number){
    return this.http.get<ProductTest>("http://localhost:8090/product/"+id)
  }

  update(id:number, product:Partial<ProductTest>){
    return this.http.put<ProductTest>("http://localhost:8080/product/"+id, product)
  }

  delete(id:number){
    return this.http.delete("http://localhost:8080/product/"+id)
  }

  getByType(type:string){
    return this.http.get<ProductTestList>("http://localhost:8090/product/type",{
      params:{
        type:type
      }
    })
  }

  getByStatus(status:string){
    return this.http.get<ProductTestList>("http://localhost:8090/product/status/",{
      params:{
        status:status
      }
    })
  }
}
