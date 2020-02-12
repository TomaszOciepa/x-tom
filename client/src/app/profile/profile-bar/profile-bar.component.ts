import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/client/model/user';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'profile-bar',
  templateUrl: './profile-bar.component.html',
  styleUrls: ['./profile-bar.component.css']
})
export class ProfileBarComponent implements OnInit {

  profile:User

  constructor(private profileService:ProfileService, protected auth:AuthService) { }

  ngOnInit() {
    this.profileService.getUserProfile().subscribe(user =>{
      this.profile = user
     }) 
  }

}
