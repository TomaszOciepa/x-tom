import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ChangeEmail } from 'src/app/model/changeEmailData';
import { PasswrodResetData } from 'src/app/model/passwordResetData';
import { ChangePassword } from 'src/app/model/changePasswordData';

@Component({
  selector: 'app-change-email',
  templateUrl: './change-email.component.html',
  styleUrls: ['./change-email.component.css']
})
export class ChangeEmailComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthService) {
    auth.state.subscribe()
   }

  ngOnInit() {
  }

  passwordConfirm:boolean = false
  correctPassword:boolean = true
  correctChangeEmail:boolean = true
  saveNewEmail:boolean = false
  saveEmail:boolean = false;
  valid:boolean = false

  confirmPasswordData:ChangePassword = {
    user_id: 0,
    password: "",
  }

  changeEmailData:ChangeEmail = {
    userId: 0
,    email: ''
  }

  confirmPasswordForm = this.fb.group({
    password: this.fb.control('',[
      Validators.required
    ]),
  })

  changeEmailForm = this.fb.group({
    email: this.fb.control('',[
      Validators.required,
      Validators.email
    ]),
  })

  confirmPassword(){

    if(this.confirmPasswordForm.valid){
      this.valid = false;
        this.confirmPasswordData.user_id = this.auth.getCurrentUser().user_id
        this.confirmPasswordData.password = this.confirmPasswordForm.get('password').value
        
        this.auth.confirmPassword(this.confirmPasswordData).subscribe(response =>{

          if(response){
            this.passwordConfirm = response
          }else{
            this.correctPassword = response
          }
          
        })
    }else{
      this.valid = true;
    }
  }


  changeEmail(){

    if(this.changeEmailForm.valid){
      this.valid = false

      this.changeEmailData.userId = this.auth.getCurrentUser().user_id
      this.changeEmailData.email = this.changeEmailForm.get('email').value

      this.auth.changeEmail(this.changeEmailData).subscribe(response =>{
        if(response){
            this.saveEmail = true
        }else{
          this.correctChangeEmail = false
        }
      })
    }else{
      this.valid = true
    }
    
  }
}
