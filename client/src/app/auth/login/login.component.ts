import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.fb.group({
    user_email:[''],
    user_password:['']
  })

  message:String

  constructor(private fb:FormBuilder, private auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()
    
    this.route.paramMap.subscribe(params =>{
      this.options = +params.get('options')
    })
  }

  options = 0

  login(){
    this.auth.login(this.loginForm.value)
  }

  ngOnInit() {
   this.message =  this.auth.getMessage()
  }

}
