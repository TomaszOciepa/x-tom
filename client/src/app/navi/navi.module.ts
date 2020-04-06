import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuComponent } from './menu/menu.component';
import { AuthModule } from '../auth/auth.module';
import { ProfileModule } from '../profile/profile.module';
import { NaviRoutingModule } from './navi.routing.module';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    AuthModule,
    ProfileModule,
    ErrorModule,
    NaviRoutingModule,
  ],
  exports: [
     PageNotFoundComponent, MenuComponent
  ],
})
export class NaviModule { }
