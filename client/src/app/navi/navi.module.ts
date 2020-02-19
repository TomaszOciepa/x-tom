import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';



@NgModule({
  declarations: [
    HomeComponent,
    PageNotFoundComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    ProfileModule,
  ],
  exports: [
    HomeComponent, PageNotFoundComponent, MenuComponent
  ],
})
export class NaviModule { }
