import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerForm = this.fb.group({
    user_email:[''],
    user_password:[''],
    user_password2:[''],
    user_firstName:[''],
    user_lastName:[''],
    user_phoneNumber:[''],
    user_zipCode:[''],
    user_city:[''],
    user_street:[''],
  })
  
  error

  register(){
    this.auth.register(this.registerForm.value)
    .subscribe(()=>{
      console.log("Success")
    },err=>{
      this.error = err.message
      console.log(this.error)

    })
  }
  
  constructor(private fb:FormBuilder, private auth:AuthService) { }
  
  ngOnInit() {
  }

}
