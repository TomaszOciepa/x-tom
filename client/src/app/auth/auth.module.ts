import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AuthInterceptorService } from './auth-interceptor.service';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthRoutingModule } from './auth.routing.module';
// import { AuthorizedGuard } from './authorized.guard';
import { RegisterComponent } from './register/register.component';
import { ValidationModule } from '../validation/validation.module';


@NgModule({
  declarations: [LoginComponent, RegisterComponent],
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
    // AuthorizedGuard
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class AuthModule { }
