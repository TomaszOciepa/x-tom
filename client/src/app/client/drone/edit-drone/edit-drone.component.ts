import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DroneService } from '../drone.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Drone } from '../../model/drone';

@Component({
  selector: 'app-edit-drone',
  templateUrl: './edit-drone.component.html',
  styleUrls: ['./edit-drone.component.css']
})
export class EditDroneComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:DroneService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('drone_id')
    })

    this.http.getById(this.id).subscribe(response =>{
      this.editedDrone = response
    })

   }

   id:number
   editedDrone:Drone
   error:boolean
   saved:boolean = false


   editDroneForm = this.fb.group({
    drone_mark: this.fb.control(''),
    drone_description: this.fb.control(''),
    drone_price: this.fb.control(''),
    drone_status: this.fb.control(''),
    drone_time_work: this.fb.control(''),
    drone_range: this.fb.control(''),
    drone_camera: this.fb.control(''),
    drone_amount_available: this.fb.control(''),
  })

  saveDrone(){
    console.log(this.editDroneForm.value)
    this.http.update(this.id, this.editDroneForm.value)
    .subscribe(()=>{
      console.log("Success")
      this.saved = true
    },err=>{
      this.error = err.message
    })
  }

  ngOnInit() {
      
  }

}
