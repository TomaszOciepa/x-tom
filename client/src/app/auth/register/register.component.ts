import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormControl, FormGroup } from '@angular/forms';
import { RegisterService } from '../register.service';
import { RegisterData } from 'src/app/model/registerData';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private registerService:RegisterService) { }
  
  ngOnInit() { }
  
  error
  validEmail:boolean = false
  validPass:boolean = false
  checkedEmail:boolean = false
  emailExists:boolean = false
  registerConfirm: boolean = false

  account:RegisterData = {
    account_confirmation_email: '',
    account_confirmation_password: '',
  }


  emailForm = this.fb.group({
    user_email: this.fb.control('',[
      Validators.required,
      Validators.email
    ]),
  })

  passwordForm = this.fb.group({
    user_password: this.fb.control('',[
      Validators.required,
      Validators.minLength(6),
      this.validatePassword({
        lowercase:true,
        uppercase:true,
        number:true,
        special:true
      })
    ]),
    user_repeat_password: this.fb.control(''),
  }, {
    validator: (control:FormGroup) =>{
       const values = control.value

      if(values.user_password !== values.user_repeat_password){
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
  
checkEmail(){
  if(this.emailForm.valid){
    this.validEmail = false;
    var email = this.emailForm.get('user_email').value

    this.registerService.checkEmail(email).subscribe(response =>{
      if(response){
        this.emailExists = false
        this.checkedEmail = true
        
      }else{
        this.emailExists = true
      }
    })
  }else{
    this.validEmail = true;
  }  
}

saveAccount(){

  if(this.passwordForm.valid){
    this.validPass = false
    
    this.account.account_confirmation_email = this.emailForm.get('user_email').value
    this.account.account_confirmation_password = this.passwordForm.get('user_password').value

    this.registerService.saveAccount(this.account).subscribe(response =>{
        if(response){
            this.registerConfirm = true
        }else{

        }
    })
  }else{
    this.validPass = true
  }
}

}


