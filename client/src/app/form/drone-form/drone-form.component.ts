import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'drone-form',
  templateUrl: './drone-form.component.html',
  styleUrls: ['./drone-form.component.css']
})
export class DroneFormComponent implements OnInit {

  constructor(private fb:FormBuilder,) { }
  
  editedDroneForm = this.fb.group({    
    
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

  product

  @Input("getProduct")
  set getId(product){
    this.product = product
  }

  ngOnInit() {
  }

}
