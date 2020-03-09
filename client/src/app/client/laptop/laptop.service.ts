import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LaptopList } from '../model/laptopList';
import { Laptop } from '../model/laptop';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<LaptopList>("http://localhost:8090/laptop/all")
  }

  create(laptop:Partial<Laptop>){
    return this.http.post<Laptop>("http://localhost:8080/laptop/create", laptop)
  }

  getById(id:number){
    return this.http.get<Laptop>("http://localhost:8090/laptop/"+id)
  }

  update(id:number, laptop:Partial<Laptop>){
    return this.http.put<Laptop>("http://localhost:8080/laptop/"+id, laptop)
  }

  delete(id:number){
    return this.http.delete("http://localhost:8080/laptop/"+id)
  }


  getByStatus(status:string){
    return this.http.get<LaptopList>("http://localhost:8090/laptop/status/",{
      params:{
        status:status
      }
    })
  }
}
