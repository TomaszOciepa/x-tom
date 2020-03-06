import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizedGuard } from '../auth/authorized.guard';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[
      AuthorizedGuard
    ]
  },
  {
    path: 'edit-user/:user_id',
    component: EditUserComponent,
    canActivate:[
      AuthorizedGuard
    ]
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
export class ProfileRoutingModule { }
