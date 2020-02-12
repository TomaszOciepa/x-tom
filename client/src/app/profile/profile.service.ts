import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../client/model/user';
import { filter, map } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private user_request:Observable<User>
  
  getUserProfile(){

    if(!this.user_request){ 
      this.user_request = this.auth.state
      .pipe(
        filter(() => this.auth.isAuthenticated),
        map(() => this.auth.getCurrentUser()),
      )
    }
    return this.user_request
  }

  clearCache(){
    this.user_request = null
  }


  constructor(private http:HttpClient, private auth:AuthService) { }
}
