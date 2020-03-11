import { Component, OnInit } from '@angular/core';
import { DroneService} from './drone.service';
import { DroneList } from '../model/droneList';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'drone',
  templateUrl: './drones.component.html',
  styleUrls: ['./drones.component.css']
})
export class DronesComponent implements OnInit {

  droneList:DroneList

  getAllDrone(){
    this.http.getAll().subscribe(response =>{
      this.droneList = response;
    })
  }

  constructor(private http:DroneService, protected auth:AuthService) {
    this.auth.state.subscribe()    
   }

  ngOnInit() {
    this.getAllDrone()
  }

}
