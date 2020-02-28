import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { DroneList } from '../model/droneList';
import { Drone } from '../model/drone';


@Injectable({
  providedIn: 'root'
})
export class DroneService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get<DroneList>("http://localhost:8090/drone/all")
  }

  create(drone:Partial<Drone>){
    return this.http.post<Drone>("http://localhost:8080/drone/create", drone)
  }

  getById(id:number){
    return this.http.get<Drone>("http://localhost:8090/drone/"+id)
  }
}
