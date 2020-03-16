import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'user-role-form',
  templateUrl: './user-role-form.component.html',
  styleUrls: ['./user-role-form.component.css']
})
export class UserRoleFormComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  roleForm = this.fb.group({
  user_role: this.fb.control(''),
})

user
updateUser:User
saved:boolean = false


@Input("getUser")
set getId(user){
  this.user = user

}

@Output('saveUser')
emiterSaveProduct = new EventEmitter()

saveUser(){
  this.updateUser = this.roleForm.value
  this.emiterSaveProduct.emit(this.updateUser)
  this.saved = true;
}

  ngOnInit() {
  }

}
