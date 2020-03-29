import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.css']
})
export class RemindPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthService) { }

  ngOnInit() {
  }

  remindPasswordForm = this.fb.group({    
    email: this.fb.control('', [
      Validators.required,
      Validators.email
    ]), 

  })

  valid:boolean = false;
  sent:boolean = false;

  resetPassword(){

    if(this.remindPasswordForm.valid){
      this.valid = false
      this.sent = true
      this.auth.passwordResetVerifyUser(this.remindPasswordForm.get('email').value).subscribe(response =>{
        console.log(response)
      })
    }else{
      this.valid = true
    }
  }

}
