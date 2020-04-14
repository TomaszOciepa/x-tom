import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-remind-password',
  templateUrl: './remind-password.component.html',
  styleUrls: ['./remind-password.component.css']
})
export class RemindPasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, public auth:AuthService) { }

  ngOnInit() {
  }

  valid:boolean = false;
  sent:boolean = false;
  
  remindPasswordForm = this.fb.group({    
    email: this.fb.control('', [
      Validators.required,
      Validators.email
    ]), 

  })

  resetPassword(){

    if(this.remindPasswordForm.valid){
      this.valid = false
      this.sent = true
      this.auth.passwordResetVerifyUser(this.remindPasswordForm.get('email').value).subscribe()
    }else{
      this.valid = true
    }
  }

}
