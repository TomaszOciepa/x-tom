import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {


  constructor(private profileService:ProfileService, protected auth:AuthService, 
    private http:ProfileService ,private route:ActivatedRoute, private fb:FormBuilder) { 

    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('user_id')
    })

    

  }

  id:number
  editedUser:User
  error:boolean
  saved:boolean = false

  editUserForm = this.fb.group({
    user_email: this.fb.control(''),
    user_password: this.fb.control(''),
    user_password2: this.fb.control(''),
    user_firstName: this.fb.control(''),
    user_lastName: this.fb.control(''),
    user_phoneNumber: this.fb.control(''),
    user_zipCode: this.fb.control(''),
    user_city: this.fb.control(''),
    user_street: this.fb.control(''),
  })

  edit(){
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

    const profile$ = this.profileService.getUserProfile()

    profile$.subscribe(user =>{
      this.editedUser = user
    })
  }

}
