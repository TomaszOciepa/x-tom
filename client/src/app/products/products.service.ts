import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductTest } from '../model/productTest';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient, private appService:AppService) { }

  getAll(){
    return this.http.get<ProductTest[]>(this.appService.urlAuth+"/product/all")
  }

  create(product:Partial<ProductTest>){
    return this.http.post<ProductTest>(this.appService.urlApi+"/product/create", product)
  }

  getById(id:number){
    return this.http.get<ProductTest>(this.appService.urlAuth+"/product/"+id)
  }

  update(id:number, product:Partial<ProductTest>){
    return this.http.put<ProductTest>(this.appService.urlApi+"/product/"+id, product)
  }

  delete(id:number){
    return this.http.delete(this.appService.urlApi+"/product/"+id)
  }

  getByType(type:string){
    return this.http.get<ProductTest[]>(this.appService.urlAuth+"/product/type",{
      params:{
        type:type
      }
    })
  }
  
  getByStatus(status:string){
    return this.http.get<ProductTest[]>(this.appService.urlAuth+"/product/status/",{
      params:{
        status:status
      }
    })
  }

}
