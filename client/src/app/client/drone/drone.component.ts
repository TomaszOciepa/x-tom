import { Component, OnInit } from '@angular/core';
import { DroneService} from './drone.service';
import { DroneList } from '../model/droneList';

@Component({
  selector: 'drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.css']
})
export class DroneComponent implements OnInit {

  droneList:DroneList

  getAllDrone(){
    this.http.getAll().subscribe(response =>{
      this.droneList = response;
    })
  }

  constructor(private http:DroneService) { }

  ngOnInit() {
    this.getAllDrone()
  }

}
