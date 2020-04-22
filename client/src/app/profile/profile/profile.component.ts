import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/auth/auth.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public auth:AuthService, private http:HttpClient, private appService:AppService) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {

    if(this.auth.isAuthenticated){
      this.id = this.auth.getCurrentUser().user_id  

      this.http.get<User>(this.appService.urlApi+"/user/"+this.id).subscribe(
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
  
  id:number
  profile:User
  statusError:number

}
