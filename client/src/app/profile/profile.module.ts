import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile.routing.module';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ProfileComponent, ProfileBarComponent, EditUserComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
  exports: [
    ProfileComponent, ProfileBarComponent
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
