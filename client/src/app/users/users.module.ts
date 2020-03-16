import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users.routing.module';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { FormModule } from '../form/form.module';
import { RoleUserComponent } from './role-user/role-user.component';



@NgModule({
  declarations: [UsersComponent, UserByIdComponent, EditUserComponent, DeleteUserComponent, RoleUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent, 
  ]
})
export class UsersModule { }
