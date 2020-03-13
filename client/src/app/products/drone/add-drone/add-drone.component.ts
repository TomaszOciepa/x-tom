import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-add-drone',
  templateUrl: './add-drone.component.html',
  styleUrls: ['./add-drone.component.css']
})
export class AddDroneComponent implements OnInit {

  addDroneForm = this.fb.group({    
    
    product_type: this.fb.control('drone'), 
    product_mark: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]), 
    product_status: this.fb.control(''), 
    product_description: this.fb.control(''), 
    product_processor: this.fb.control('brak'), 
    product_system: this.fb.control('brak'), 
    product_camera: this.fb.control(''), 
    product_disc_type: this.fb.control('brak'), 
    product_graphics_card: this.fb.control('brak'), 
    product_price: this.fb.control(''), 
    product_ram_size: this.fb.control('0'), 
    product_disc_size: this.fb.control('0'), 
    product_screen_diagonal: this.fb.control('0'), 
    product_amount_available: this.fb.control(''), 
    product_camera_resolution: this.fb.control('0'), 
    product_time_work: this.fb.control(''), 
    product_range: this.fb.control(''),
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

  constructor(private fb:FormBuilder, private http:ProductsService, protected auth:AuthService,) {
    this.auth.state.subscribe()
   }

  ngOnInit() {

  }

}
