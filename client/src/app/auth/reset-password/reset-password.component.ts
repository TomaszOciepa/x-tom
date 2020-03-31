import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, ValidatorFn, FormControl } from '@angular/forms';
import { AuthService } from '../auth.service';
import { PasswrodResetData } from 'src/app/model/passwordResetData';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  
  constructor(private fb:FormBuilder, private auth:AuthService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(param =>{
      this.passwordResetData.email = param['user']
      this.passwordResetData.code = param['code']
      
    })

    this.auth.passwordResetCheckCode(this.passwordResetData).subscribe(response =>{
      this.linkIsCorrect = response
    });
      
  }

  linkIsCorrect:boolean
  saveNewPassword:boolean = false
  valid:boolean = false
  
  passwordResetData:PasswrodResetData = {
    email: "",
    code: "",
    password: '',
  }

  resetPasswordForm = this.fb.group({
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

  resetPassword(){

    if(this.resetPasswordForm.valid){
      this.valid = false
      
      this.passwordResetData.password = this.resetPasswordForm.get('password').value

      this.auth.passwordResetSetNew(this.passwordResetData).subscribe(response =>{
        this.saveNewPassword = response
      })
      
    }else{
      this.valid = true
    }
  }

}
