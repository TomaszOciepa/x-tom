import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserByIdComponent } from './user-by-id/user-by-id.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';

const routes: Routes = [
  {
    path:'users',
    component:  UsersComponent
  },
  {
    path: 'user/:user_id',
    component: UserByIdComponent
  },
  {
    path: 'edit-user/:user_id',
    component: EditUserComponent
  },
  {
    path: 'delete-user/:user_id',
    component: DeleteUserComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class UsersRoutingModule { }
