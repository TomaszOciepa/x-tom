import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile.routing.module';


@NgModule({
  declarations: [ProfileComponent, ProfileBarComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ProfileRoutingModule
  ],
  exports: [
    ProfileComponent, ProfileBarComponent
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
