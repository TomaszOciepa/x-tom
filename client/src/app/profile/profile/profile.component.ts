import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/users/users.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userService:UsersService, private profileService:ProfileService, protected auth:AuthService, private http:HttpClient) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {

    if(this.auth.isAuthenticated){
      this.id = this.auth.getCurrentUser().user_id  

      this.http.get<User>("http://localhost:8080/user/"+this.id).subscribe(
        response =>{
          this.profile = response
        }
      )
    } 
  }

  id:number
  profile:User

}
