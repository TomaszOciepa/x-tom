import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/client/model/user';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profile:User

  constructor(private profileService:ProfileService) { }

  ngOnInit() {
    console.log("siema profil")
    const profile$ = this.profileService.getUserProfile()

    profile$.subscribe(user =>{
      this.profile = user
    })
  }

}
