import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from './profile.service';
import { ProfileComponent } from './profile/profile.component';
import { ProfileBarComponent } from './profile-bar/profile-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileRoutingModule } from './profile.routing.module';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormModule } from '../form/form.module';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [ProfileComponent, ProfileBarComponent, EditProfileComponent],
  imports: [
    CommonModule,
    FormModule,
    HttpClientModule,
    ErrorModule,
    ReactiveFormsModule,
    ProfileRoutingModule,
  ],
  exports: [
    ProfileComponent, ProfileBarComponent, 
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
