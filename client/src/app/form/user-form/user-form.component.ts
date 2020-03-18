import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

    userForm = this.fb.group({
    user_firstName: this.fb.control(''),
    user_lastName: this.fb.control(''),
    user_email: this.fb.control(''),
    user_phoneNumber: this.fb.control(''),
    user_zipCode: this.fb.control(''),
    user_city: this.fb.control(''),
    user_street: this.fb.control(''),
  })

  user
  updateUser:User
  saved:boolean = false
  returnPath:string

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
    console.log("zaktualizowany: "+this.userForm.value)
    this.updateUser = this.userForm.value
    this.emiterSaveProduct.emit(this.updateUser)
    this.saved = true;
  }
  ngOnInit() {
  }

}
