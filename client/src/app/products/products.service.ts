import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductTestList } from '../model/productTestList';
import { ProductTest } from '../model/productTest';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  // ---> localhost
  // getAll(){
  //   return this.http.get<ProductTest[]>("http://localhost:8090/product/all")
  // }

  // ----> remote
  getAll(){
    return this.http.get<ProductTest[]>("https://x-tom-auth.herokuapp.com/product/all")
  }


  // ---> localhost
  // create(product:Partial<ProductTest>){
  //   return this.http.post<ProductTest>("http://localhost:8080/product/create", product)
  // }

  // ----> remote
  create(product:Partial<ProductTest>){
    return this.http.post<ProductTest>("https://x-tom-api.herokuapp.com/product/create", product)
  }
  
    // ---> localhost
  // getById(id:number){
  //   return this.http.get<ProductTest>("http://localhost:8090/product/"+id)
  // }

  // ----> remote
  getById(id:number){
    return this.http.get<ProductTest>("https://x-tom-auth.herokuapp.com/product/"+id)
  }

   // ---> localhost
  // update(id:number, product:Partial<ProductTest>){
  //   return this.http.put<ProductTest>("http://localhost:8080/product/"+id, product)
  // }

  // ----> remote
  update(id:number, product:Partial<ProductTest>){
    return this.http.put<ProductTest>("https://x-tom-api.herokuapp.com/product/"+id, product)
  }

   // ---> localhost
  // delete(id:number){
  //   return this.http.delete("http://localhost:8080/product/"+id)
  // }

  // ----> remote
  delete(id:number){
    return this.http.delete("https://x-tom-api.herokuapp.com/product/"+id)
  }

  // ---> localhost
  // getByType(type:string){
  //   return this.http.get<ProductTestList>("http://localhost:8090/product/type",{
  //     params:{
  //       type:type
  //     }
  //   })
  // }

  // ---> remote
  getByType(type:string){
    return this.http.get<ProductTestList>("https://x-tom-auth.herokuapp.com/product/type",{
      params:{
        type:type
      }
    })
  }


  // ---> localhost
  // getByStatus(status:string){
  //   return this.http.get<ProductTestList>("http://localhost:8090/product/status/",{
  //     params:{
  //       status:status
  //     }
  //   })
  // }

  // ----> remote
  getByStatus(status:string){
    return this.http.get<ProductTestList>("https://x-tom-auth.herokuapp.com/product/status/",{
      params:{
        status:status
      }
    })
  }
}
