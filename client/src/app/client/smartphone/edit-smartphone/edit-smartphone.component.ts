import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SmartphoneService } from '../smartphone.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Smartphone } from '../../model/smartphone';

@Component({
  selector: 'app-edit-smartphone',
  templateUrl: './edit-smartphone.component.html',
  styleUrls: ['./edit-smartphone.component.css']
})
export class EditSmartphoneComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:SmartphoneService, protected auth:AuthService, private route:ActivatedRoute) { 
    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('smartphone_id')
    })

    this.http.getById(this.id).subscribe(response =>{
      this.editedSmartphone = response
    })
  }

  id:number
  editedSmartphone:Smartphone
  error:boolean
  saved:boolean = false

  editSmartphoneForm = this.fb.group({
    smartphone_mark: this.fb.control(''),
    smartphone_description:this.fb.control(''),
    smartphone_price: this.fb.control(''),
    smartphone_status: this.fb.control(''),
    smartphone_system: this.fb.control(''),
    smartphone_screen_diagonal: this.fb.control(''),
    smartphone_disc_size: this.fb.control(''),
    smartphone_ram_size: this.fb.control(''),
    smartphone_camera_resolution: this.fb.control(''),
    smartphone_amount_available: this.fb.control(''),
  })

  saveSmartphone(){
    console.log(this.editSmartphoneForm.value)
    this.http.update(this.id, this.editSmartphoneForm.value)
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
