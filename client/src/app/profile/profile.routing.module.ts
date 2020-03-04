import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AuthorizedGuard } from '../auth/authorized.guard';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
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
