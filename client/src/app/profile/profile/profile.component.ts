import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/users/users.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  id:number
  profile:User

  constructor(private userService:UsersService, private profileService:ProfileService, protected auth:AuthService) { 
    this.auth.state.subscribe()
    this.profileService.getUserProfile().subscribe(response =>{
      this.id = response.user_id
    })

    this.userService.getById(this.id).subscribe(response =>{
      this.profile = response
    })
  }

  ngOnInit() {
    console.log("siema profil")
    // const profile$ = this.profileService.getUserProfile()

    // profile$.subscribe(user =>{
    //   this.profile = user
    // })
  }

}
