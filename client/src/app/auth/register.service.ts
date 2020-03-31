import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../model/registerData';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }


  checkEmail(email:string){
    return this.http.post<boolean>("http://localhost:8090/account/check-email", email)
  }

  saveAccount(account:RegisterData){
    return this.http.post<boolean>("http://localhost:8090/account/save", account)
  }

  confirmAccount(code:string, email:string){
    return this.http.get<boolean>("http://localhost:8090/account/confirmation",{
      params:{
        code:code,
        email:email
      }
    })
  }
}
