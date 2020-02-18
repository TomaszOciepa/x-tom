import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LaptopList } from '../model/laptopList';


@Injectable({
  providedIn: 'root'
})
export class LaptopService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<LaptopList>("http://localhost:8090/laptop/all")
  }
}
