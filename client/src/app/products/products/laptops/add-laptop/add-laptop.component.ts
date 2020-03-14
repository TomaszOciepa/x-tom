import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  addLaptopForm = this.fb.group({
    product_type: this.fb.control('laptop'), 
    product_mark: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]), 
    product_status: this.fb.control(''), 
    product_description: this.fb.control(''), 
    product_processor: this.fb.control(''), 
    product_system: this.fb.control(''), 
    product_camera: this.fb.control('brak'), 
    product_disc_type: this.fb.control(''), 
    product_graphics_card: this.fb.control(''), 
    product_price: this.fb.control(''), 
    product_ram_size: this.fb.control(''), 
    product_disc_size: this.fb.control(''), 
    product_screen_diagonal: this.fb.control(''), 
    product_amount_available: this.fb.control(''), 
    product_camera_resolution: this.fb.control('0'), 
    product_time_work: this.fb.control('0'), 
    product_range: this.fb.control('0'),
  })
  
  error: boolean;
  save: boolean = false;

  addLaptop(){
    console.log(this.addLaptopForm.value)
    this.http.create(this.addLaptopForm.value)
    .subscribe(()=>{
      console.log("Success")
      this.save = true
    },err=>{
      this.error = err.message
    })
  }

  constructor(private fb:FormBuilder, private http:ProductsService, protected auth:AuthService) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {
  }

}
