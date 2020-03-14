import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { NaviModule } from './navi/navi.module';
import { AuthService } from './auth/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { UsersModule } from './users/users.module';
import { CartModule } from './cart/cart.module';
import { ProductsModule } from './products/products.module';
import { FormModule } from './form/form.module';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AuthModule,
    ProfileModule,
    NaviModule,
    UsersModule,
    CartModule,
    ProductsModule,
    FormModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private auth:AuthService, private router:Router){
      this.auth.state.subscribe(state =>{
        if(this.auth.isAuthenticated){
          // this.router.navigate(['/'])
        }else{
          // this.router.navigate(['/login'])
        }
      })

      this.router.events.subscribe(event =>{
        if(event instanceof NavigationEnd){
          //...
        }
      })
  }
}
