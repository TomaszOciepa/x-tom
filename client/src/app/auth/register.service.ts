import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterData } from '../model/registerData';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

  // ---> localhost
  checkEmail(email:string){
    return this.http.post<boolean>("http://localhost:8090/account/check-email", email)
  }

  // ----> remote
  // checkEmail(email:string){
  //   return this.http.post<boolean>("https://x-tom-auth.herokuapp.com/account/check-email", email)
  // }

  // ----> remote aws
  // checkEmail(email:string){
  //   return this.http.post<boolean>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8090/account/check-email", email)
  // }

  // ---> localhost
  saveAccount(account:RegisterData){
    return this.http.post<boolean>("http://localhost:8090/account/save", account)
  }

  // ----> remote
  // saveAccount(account:RegisterData){
  //   return this.http.post<boolean>("https://x-tom-auth.herokuapp.com/account/save", account)
  // }

  // ----> remote aws
  // saveAccount(account:RegisterData){
  //   return this.http.post<boolean>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8090/account/save", account)
  // }

  // ---> localhost
  confirmAccount(code:string, email:string){
    return this.http.get<boolean>("http://localhost:8090/account/confirmation",{
      params:{
        code:code,
        email:email
      }
    })
  }

  // ----> remote
  // confirmAccount(code:string, email:string){
  //   return this.http.get<boolean>("https://x-tom-auth.herokuapp.com/account/confirmation",{
  //     params:{
  //       code:code,
  //       email:email
  //     }
  //   })
  // }

    // ----> remote
    // confirmAccount(code:string, email:string){
    //   return this.http.get<boolean>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8090/account/confirmation",{
    //     params:{
    //       code:code,
    //       email:email
    //     }
    //   })
    // }

}
