import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth.routing.module';
import { RegisterComponent } from './register/register.component';
import { ValidationModule } from '../validation/validation.module';
import { RemindPasswordComponent } from './remind-password/remind-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { ChangeEmailComponent } from './change-email/change-email.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';


@NgModule({
  declarations: [LoginComponent, RegisterComponent, RemindPasswordComponent, ResetPasswordComponent, ChangePasswordComponent, ChangeEmailComponent, ConfirmAccountComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ValidationModule,
    AuthRoutingModule
  ],
  providers: [
    AuthService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    },
    
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
