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
import { OrdersModule } from './orders/orders.module';
import { ValidationModule } from './validation/validation.module';
import { AdminModule } from './admin/admin.module';
import { ErrorModule } from './error/error.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HomeComponent } from './home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    NavigationBarComponent,
    HomeComponent,
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
    OrdersModule,
    ValidationModule,
    AdminModule,
    ErrorModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
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
