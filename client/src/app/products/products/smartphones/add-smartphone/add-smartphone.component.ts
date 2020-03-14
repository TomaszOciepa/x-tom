import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-add-smartphone',
  templateUrl: './add-smartphone.component.html',
  styleUrls: ['./add-smartphone.component.css']
})
export class AddSmartphoneComponent implements OnInit {

  addSmartphoneForm = this.fb.group({
    product_type: this.fb.control('smartphone'), 
    product_mark: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]), 
    product_status: this.fb.control(''), 
    product_description: this.fb.control(''), 
    product_processor: this.fb.control('brak'), 
    product_system: this.fb.control(''), 
    product_camera: this.fb.control('brak'), 
    product_disc_type: this.fb.control('brak'), 
    product_graphics_card: this.fb.control('brak'), 
    product_price: this.fb.control(''), 
    product_ram_size: this.fb.control(''), 
    product_disc_size: this.fb.control(''), 
    product_screen_diagonal: this.fb.control(''), 
    product_amount_available: this.fb.control(''), 
    product_camera_resolution: this.fb.control(''), 
    product_time_work: this.fb.control('0'), 
    product_range: this.fb.control('0')
  })
  
  error: boolean;
  save: boolean = false;

  addSmartphone(){
    console.log(this.addSmartphoneForm.value)
    this.http.create(this.addSmartphoneForm.value)
    .subscribe(()=>{
      console.log("Success")
      this.save = true
    },err=>{
      this.error = err.message
    })
  }

  constructor(private fb:FormBuilder, private http:ProductsService,  protected auth:AuthService) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {
  }


}
