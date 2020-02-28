import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SmartphoneList } from '../model/smartphoneList';
import { Smartphone } from '../model/smartphone';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<SmartphoneList>("http://localhost:8090/smartphone/all")
  }

  create(smartphone:Partial<Smartphone>){
    return this.http.post<Smartphone>("http://localhost:8080/smartphone/create", smartphone)
  }

  getById(id:number){
    return this.http.get<Smartphone>("http://localhost:8090/smartphone/"+id)
  }
}
