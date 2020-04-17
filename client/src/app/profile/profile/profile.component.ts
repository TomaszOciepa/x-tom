import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/users/users.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth:AuthService, private http:HttpClient) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {

    if(this.auth.isAuthenticated){
      this.id = this.auth.getCurrentUser().user_id  

      this.http.get<User>(this.remoteUrlAWS+this.id).subscribe(
        response =>{
          this.profile = response
        }
      ), error =>{
        if(error instanceof HttpErrorResponse){
          this.statusError = error.status
          console.error(error.error)
        }
      } 
    } 
  }

  // localUrl = "http://localhost:8080/user/"
  // remoteUrl = "https://x-tom-api.herokuapp.com/user/"
  remoteUrlAWS = "http://ec2-3-127-233-248.eu-central-1.compute.amazonaws.com:8080/user/"
  id:number
  profile:User
  statusError:number

}
