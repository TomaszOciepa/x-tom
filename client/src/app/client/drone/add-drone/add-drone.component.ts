import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DroneService } from '../drone.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'add-drone',
  templateUrl: './add-drone.component.html',
  styleUrls: ['./add-drone.component.css']
})
export class AddDroneComponent implements OnInit {

  addDroneForm = this.fb.group({
    drone_mark: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    drone_description: this.fb.control(''),
    drone_price: this.fb.control(''),
    drone_status: this.fb.control(''),
    drone_time_work: this.fb.control(''),
    drone_range: this.fb.control(''),
    drone_camera: this.fb.control(''),
    drone_amount_available: this.fb.control(''),
  })

  error: boolean
  save: boolean = false;

  addDrone(){
    console.log(this.addDroneForm.value)
    this.http.create(this.addDroneForm.value)
    .subscribe(()=>{
      console.log("Success")
      this.save = true
    },err=>{
      this.error = err.message
    })
  }

  constructor(private fb:FormBuilder, private http:DroneService, protected auth:AuthService,) {
    this.auth.state.subscribe()
   }

  ngOnInit() {

  }

}
