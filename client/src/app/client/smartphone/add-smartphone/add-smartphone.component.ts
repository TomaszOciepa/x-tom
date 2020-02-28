import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'add-smartphone',
  templateUrl: './add-smartphone.component.html',
  styleUrls: ['./add-smartphone.component.css']
})
export class AddSmartphoneComponent implements OnInit {


  addSmartphoneForm = this.fb.group({
    smartphone_mark:[''],
    smartphone_description:[''],
    smartphone_price:[''],
    smartphone_status:[''],
    smartphone_system:[''],
    smartphone_screen_diagonal:[''],
    smartphone_disc_size:[''],
    smartphone_ram_size:[''],
    smartphone_camera_resolution:[''],
    smartphone_amount_available:[''],
  })
  
  error: boolean;

  addSmartphone(){
    console.log(this.addSmartphoneForm.value)
    this.http.create(this.addSmartphoneForm.value)
    .subscribe(()=>{
      console.log("Success")
    },err=>{
      this.error = err.message
    })
  }

  constructor(private fb:FormBuilder, private http:SmartphoneService) { }

  ngOnInit() {
  }

}