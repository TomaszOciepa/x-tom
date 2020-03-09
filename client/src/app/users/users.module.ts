import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UsersRoutingModule } from './users.routing.module';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteUserComponent } from './delete-user/delete-user.component';



@NgModule({
  declarations: [UsersComponent, UserByIdComponent, EditUserComponent, DeleteUserComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UsersRoutingModule
  ],
  exports: [
    UsersComponent, 
  ]
})
export class UsersModule { }
