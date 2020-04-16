import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  ngOnInit() {
    document.scrollingElement.scrollTop = 0
  }
  
  userForm = this.fb.group({
    user_firstName: this.fb.control('', [
      Validators.minLength(3)
    ]),
    user_lastName: this.fb.control('', [
      Validators.minLength(2)
    ]),
    user_phoneNumber: this.fb.control('', [
      Validators.pattern(/^[0-9]+$/)
    ]),
    user_zipCode: this.fb.control('', [
      Validators.pattern(/^\d{2}-\d{3}$/)
    ]),
    user_city: this.fb.control('', [
      Validators.pattern(/[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/)
    ]),
    user_street: this.fb.control(''),
    
  })
  
  user
  updateUser:User
  returnPath:string
  saved:boolean = false
  valid:boolean = false
  
  @Input("getUser")
  set getId(product){
    this.user = product

  }

  @Input("getPath")
  set getPath(path){
    this.returnPath = path

  }

  @Output('saveUser')
  emiterSaveProduct = new EventEmitter()

  saveUser(){

    if(this.userForm.valid){
      this.valid = false
      this.updateUser = this.userForm.value
      this.emiterSaveProduct.emit(this.updateUser)
      this.saved = true;
    }else{
      this.valid = true
    }

    
  }

}
