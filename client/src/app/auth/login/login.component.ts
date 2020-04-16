import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private fb:FormBuilder, public auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()
    
    this.route.paramMap.subscribe(params =>{
      this.options = +params.get('options')
      })
  }

  ngOnInit() {
    this.message =  this.auth.getMessage()
    document.scrollingElement.scrollTop = 0
   }

  message:String
  options = 0
  valid:boolean = false
  correctData = true


  loginForm = this.fb.group({
    user_email: this.fb.control('', [
    Validators.required,
    Validators.email
    ]),
    user_password: this.fb.control('', [
      Validators.required,
    ]),
  })
  
  login(){

    if(this.loginForm.valid){
      this.valid = false;
      this.auth.login(this.loginForm.value)
      if(!this.auth.status){
        this.correctData = false
      }
    }else{
      this.valid = true;
    }
  }

}
