import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ChangePassword } from 'src/app/model/changePasswordData';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  constructor(private fb:FormBuilder, public auth:AuthService) {
    auth.state.subscribe()
   }

  ngOnInit() {
    document.scrollingElement.scrollTop = 0
  }

  passwordConfirm:boolean = false
  correctPassword:boolean = true
  saveNewPassword:boolean = false
  valid:boolean = false

  confirmPasswordData:ChangePassword = {
    user_id: 0,
    password: "",
  }

  changePasswordData:ChangePassword = {
    user_id: 0
,    password: ''
  }

  confirmPasswordForm = this.fb.group({
    password: this.fb.control('',[
      Validators.required
    ]),
  })

  changePasswordForm = this.fb.group({
    password: this.fb.control('',[
      Validators.required,
      Validators.minLength(6),
      this.validatePassword({
        lowercase:true,
        uppercase:true,
        number:true,
        special:true
      })
    ]),
    password_repeat: this.fb.control(''),



  }, {
    validator: (control:FormGroup) =>{
       const values = control.value

      if(values.password !== values.password_repeat){
        return {
          password_match:true
        }
      }

      return null
    }
  })


  validatePassword(options:{
    uppercase?:boolean;
    lowercase?:boolean;
    number?:boolean;
    special?:boolean;
  }):ValidatorFn{
    
    return (control: FormControl) =>{

      const hasUppercase = control.value.match(/[A-Z]/)
      const hasLowercase = control.value.match(/[a-z]/)
      const hasNumber = control.value.match(/[\d]/)
      const hasSpecial = control.value.match(/[\W]/)
      
      const errors = {}
      let valid = true

      if(options.uppercase && !hasUppercase){
        errors['uppercase'] = true
        valid = false
      }
      if(options.lowercase && !hasLowercase){
        errors['lowercase'] = true
        valid = false
      }
      if(options.number && !hasNumber){
        errors['number'] = true
        valid = false
      }
      if(options.special && !hasSpecial){
        errors['special'] = true
        valid = false
      }

      return valid? null : {
        'password': errors
      }
    }

  }

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

  changePassword(){

    if(this.changePasswordForm.valid){
      this.valid = false

      this.changePasswordData.user_id = this.auth.getCurrentUser().user_id
      this.changePasswordData.password = this.changePasswordForm.get('password').value

      this.auth.changePassword(this.changePasswordData).subscribe()
      this.saveNewPassword = true
    }else{
      this.valid = true
    }
    
  }

}
