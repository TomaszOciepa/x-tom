import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UsersService } from '../users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/client/model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private fb:FormBuilder, private http:UsersService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('user_id')
    })


    this.http.getById(this.id).subscribe(response =>{
      this.editedUser = response
    })
   }

   id:number
   editedUser:User
   error:boolean
   saved:boolean = false

   editUserForm = this.fb.group({
    user_email: this.fb.control(''),
    user_role: this.fb.control(''),
    user_password: this.fb.control(''),
    user_password2: this.fb.control(''),
    user_firstName: this.fb.control(''),
    user_lastName: this.fb.control(''),
    user_phoneNumber: this.fb.control(''),
    user_zipCode: this.fb.control(''),
    user_city: this.fb.control(''),
    user_street: this.fb.control(''),
  })

  saveUser(){
    console.log(this.editUserForm.value)
    this.http.update(this.id, this.editUserForm.value)
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
