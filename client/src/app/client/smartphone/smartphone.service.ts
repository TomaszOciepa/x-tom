import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SmartphoneList } from '../model/smartphoneList';

@Injectable({
  providedIn: 'root'
})
export class SmartphoneService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<SmartphoneList>("http://localhost:8090/smartphone/all")
  }
}
