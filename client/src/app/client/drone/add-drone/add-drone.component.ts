import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DroneService } from '../drone.service';

@Component({
  selector: 'add-drone',
  templateUrl: './add-drone.component.html',
  styleUrls: ['./add-drone.component.css']
})
export class AddDroneComponent implements OnInit {

  addDroneForm = this.fb.group({
    drone_mark:[''],
    drone_description:[''],
    drone_price:[''],
    drone_status:[''],
    drone_time_work:[''],
    drone_range:[''],
    drone_camera:[''],
    drone_amount_available:[''],
  })

  error: boolean;

  addDrone(){
    console.log(this.addDroneForm.value)
    this.http.create(this.addDroneForm.value)
    .subscribe(()=>{
      console.log("Success")
    },err=>{
      this.error = err.message
    })
  }

  constructor(private fb:FormBuilder, private http:DroneService) { }

  ngOnInit() {
  }

}
