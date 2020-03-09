import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizedGuard } from '../auth/authorized.guard';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate:[
      AuthorizedGuard
    ]
  },
  {
    path: 'edit-profile/:user_id',
    component: EditProfileComponent,
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
