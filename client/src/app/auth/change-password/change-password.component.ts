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

  constructor(private fb:FormBuilder, private auth:AuthService) {
    auth.state.subscribe()
   }

  ngOnInit() {
  }

  changePasswordData:ChangePassword = {
    user_id: 0
,    password: ''
  }

  saveNewPassword:boolean = false
  valid:boolean = false

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
