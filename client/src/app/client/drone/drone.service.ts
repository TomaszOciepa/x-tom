import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DroneList } from '../model/droneList';


@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<DroneList>("http://localhost:8090/drone/all")
  }

}
