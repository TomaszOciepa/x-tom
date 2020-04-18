import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../model/registerData';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient, private appService:AppService) { }

  checkEmail(email:string){
    return this.http.post<boolean>(this.appService.urlAuth+"/account/check-email", email)
  }

  saveAccount(account:RegisterData){
    return this.http.post<boolean>(this.appService.urlAuth+"/account/save", account)
  }

    confirmAccount(code:string, email:string){
      return this.http.get<boolean>(this.appService.urlAuth+"/account/confirmation",{
        params:{
          code:code,
          email:email
        }
      })
    }

}
