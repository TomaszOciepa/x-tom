import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, FormControl, ValidationErrors, AsyncValidatorFn, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fb:FormBuilder, private auth:AuthService) { }
  
  ngOnInit() {
    // this.registerForm.get('user_firstName').hasError
  
  }
  
  registerForm = this.fb.group({
    user_email: this.fb.control('',[
      Validators.required,
      Validators.email
    ],[
      this.validateEmail
    ]),
    user_password: this.fb.control('',[
      Validators.required,
      Validators.minLength(3),
      // Validators.pattern('(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$')
      this.validatePassword({
        lowercase:true,
        uppercase:true,
        number:true
      })
    ]),
    user_repeat_password: this.fb.control(''),
    
    // user_firstName: this.fb.control(''),
    // user_lastName: this.fb.control(''),
    // user_phoneNumber: this.fb.control(''),
    // user_zipCode: this.fb.control(''),
    // user_city: this.fb.control(''),
    // user_street: this.fb.control(''),


  }, {
    validator: (control:FormGroup) =>{
      // console.log(control)
       const values = control.value

      if(values.user_password !== values.user_repeat_password){
        return {
          password_match:true
        }
      }

      return null
    }
  })
  
  error

  validateEmail<AsyncValidatorFn>(control: FormControl){
      const value = control.value;

      return Observable.create((observer:Observer<ValidationErrors | null>) => {
        setTimeout(()=>{
          const notAllwed = ['demo@wp.pl','admin', 'user']
          const notValid = notAllwed.includes(value)
    
          const result = notValid? {
            'invalid-username': value
          } : null
          observer.next(result)
          observer.complete()
        },2000)
      })


    // return this.auth.register()
  }

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

  // validatePassword<ValidatorFn>(control:FormControl){

  //   const noError = control.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)

  //   if(noError){
  //     return null
  //   }else{
  //     return <ValidationErrors>{
  //       'password': true
  //     }
  //   }
    
  // }

  valid:boolean = false

  register(){

    if(this.registerForm.valid){
      this.valid = false
      
      this.auth.register(this.registerForm.value)
      .subscribe(()=>{
        console.log("Success")
      },err=>{
        this.error = err.message
        console.log(this.error)
  
      })
  
    }else{
      this.valid = true
    }


    

  }
  
}
