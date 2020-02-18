import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../client/model/user';
import { map, tap } from 'rxjs/internal/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

interface Credentials{
  user_email: String;
  user_password: String;
}

interface Session{
  token: String;
  user: User;
  message?: String
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = "http://localhost:8090/login"

  private session = new BehaviorSubject<Session>(null)

  isAuthenticated = false
  
  state = this.session.pipe(
    map( session => session && !!session.token),
    tap( state => this.isAuthenticated = state)
  )

  logout(message?:String){
    this.session.next({
      ...this.session.getValue(),
      token: null,
      message
    })
  }

  getToken(){
    const session = this.session.getValue()
    return session && session.token;
  }

  getCurrentUser(){
    const session = this.session.getValue()
    return session && session.user;
  }

  getMessage(){
    const session = this.session.getValue()
    return session && session.message;
  }

  login(credentials:Credentials){
    console.log(credentials)
    this.http.post(this.url, credentials)
    .subscribe((session:Session) =>{
      this.session.next(session)
      console.log(session.token)
    },error =>{
      if(error instanceof HttpErrorResponse){
        console.error(error.error)
      }
      
    })
  }

  constructor(private http:HttpClient) { }
}
