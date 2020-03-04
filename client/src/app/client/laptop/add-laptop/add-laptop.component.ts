import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LaptopService } from '../laptop.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'add-laptop',
  templateUrl: './add-laptop.component.html',
  styleUrls: ['./add-laptop.component.css']
})
export class AddLaptopComponent implements OnInit {

  addLaptopForm = this.fb.group({
    laptop_mark:[''],
    laptop_description:[''],
    laptop_price:[''],
    laptop_status:[''],
    laptop_system:[''],
    laptop_processor:[''],
    laptop_ram_size:[''],
    laptop_disc_type:[''],
    laptop_disc_size:[''],
    laptop_graphics_card:[''],
    laptop_screen_diagonal:[''],
    laptop_amount_available:[''],
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

  constructor(private fb:FormBuilder, private http:LaptopService, protected auth:AuthService) { 
    this.auth.state.subscribe()

    if(this.auth.isAuthenticated){
      this.auth.checkRole.subscribe()
    }
  }

  ngOnInit() {
  }

}
