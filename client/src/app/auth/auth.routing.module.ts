import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RemindPasswordComponent } from './remind-password/remind-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';

const routes: Routes = [
  {
    path: 'logowanie',
    component: LoginComponent
  },
  {
    path: 'logowanie/:options',
    component: LoginComponent
  },
  {
    path: 'rejestracja',
    component: RegisterComponent
  },
  {
    path: 'przypomnij-haslo',
    component: RemindPasswordComponent
  },
  {
    path: 'resetuj-haslo',
    component: ResetPasswordComponent
  },
  {
    path: 'zmiana-hasla',
    component: ChangePasswordComponent
  },
  {
    path: 'zmiana-email',
    component: ChangeEmailComponent
  },
  {
    path: 'potwierdzenie-rejestracji/:code/:email',
    component: ConfirmAccountComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }
