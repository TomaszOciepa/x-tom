import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LaptopService } from '../laptop.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { Laptop } from '../../model/laptop';

@Component({
  selector: 'app-edit-laptop',
  templateUrl: './edit-laptop.component.html',
  styleUrls: ['./edit-laptop.component.css']
})
export class EditLaptopComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:LaptopService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()

    if(this.auth.isAuthenticated){
      this.auth.checkRole.subscribe()
    }

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('laptop_id')
    })

    this.http.getById(this.id).subscribe(response =>{
      this.editedLaptop = response
    })

   }

   id:number
   editedLaptop:Laptop
   error:boolean
   saved:boolean = false

   editLaptopForm = this.fb.group({
    laptop_mark: this.fb.control(''),
    laptop_description: this.fb.control(''),
    laptop_price: this.fb.control(''),
    laptop_status: this.fb.control(''),
    laptop_system: this.fb.control(''),
    laptop_processor: this.fb.control(''),
    laptop_ram_size: this.fb.control(''),
    laptop_disc_type: this.fb.control(''),
    laptop_disc_size: this.fb.control(''),
    laptop_graphics_card: this.fb.control(''),
    laptop_screen_diagonal: this.fb.control(''),
    laptop_amount_available: this.fb.control(''),
  })

  saveLaptop(){
    console.log(this.editLaptopForm.value)
    this.http.update(this.id, this.editLaptopForm.value)
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
