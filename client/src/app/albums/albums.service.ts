import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DroneList } from '../client/model/droneList';
import { Drone } from '../client/model/drone';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor(private http:HttpClient) { 

  }


  getAll(){
    return this.http.get<DroneList>("http://localhost:8090/drone/all")
  }

  getById(id:number){
    return this.http.get<Drone>("http://localhost:8090/drone/"+id)
  }
}
