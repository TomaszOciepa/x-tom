import { Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../model/user';
import { map, tap } from 'rxjs/internal/operators';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { UserCodeEncryptService } from './user-code-encrypt.service';
import { PasswrodResetData } from '../model/passwordResetData';
import { ChangePassword } from '../model/changePasswordData';
import { ChangeEmail } from '../model/changeEmailData';
import { Router } from '@angular/router';


interface Credentials{
  user_email: String;
  user_password: String;
}

interface Session{
  token: String;
  user: User;
  message?: String
  status: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http:HttpClient, private userCodeEnctryptService:UserCodeEncryptService, private router: Router) {
  }
  
  private session = new BehaviorSubject<Session>(null)

  urlLocal = "http://localhost:8090/login"
  // urlRemote = "https://x-tom-auth.herokuapp.com/login"
  isAuthenticated = false
  role:string
  name:String
  user:User
  status:boolean
  

  userSession:Session = {
    token: '',
    user: this.user,
    status: false
  }

  state = this.session.pipe(
    map( session => session && !!session.token),
    tap( state => this.isAuthenticated = state)
    )
      
  checkRole = this.session.pipe(
    map(role => this.role = role.user.user_role))
    
    login(credentials:Credentials){
      
    return this.http.post(this.urlLocal, credentials)
      .subscribe((session:Session) =>{
        this.session.next(session)
        if(session.status){
          this.role = session.user.user_role
          this.name = session.user.user_firstName
          this.status = session.status
          this.setTokenInLocalStorage(session.token)
          this.setUserIdInStorage(session.user.user_id)
        }
        
      },error =>{
        if(error instanceof HttpErrorResponse){
          console.error(error.error)
        }
      })
      
    }

    logout(message?:String){
      this.session.next({
        ...this.session.getValue(),
        token: null,
        message
      })
      
      this.clearRole()
      localStorage.removeItem('(O,,O)')
      localStorage.removeItem('x-tom------>____ <o_o> ____<----x-tom')
      // window.location.reload()
      this.router.navigate(['/home']);      
    }
    
    getCurrentUser(){
      const session = this.session.getValue()
      return session && session.user;
    }

    // ---> localhost
    checkEmail(email:string){
      return this.http.post<boolean>("http://localhost:8090/check-email", email)
    }

    // ---> remote
    // checkEmail(email:string){
    //   return this.http.post<boolean>("https://x-tom-auth.herokuapp.com/check-email", email)
    // }

    clearRole(){
        this.role = ""
    }
        
    getToken(){
    const session = this.session.getValue()
    return session && session.token;
    }

    getMessage(){
    const session = this.session.getValue()
    return session && session.message;
    }

  setTokenInLocalStorage(token){
      localStorage.setItem('(O,,O)', JSON.stringify(token))
  }

  getTokenInLocalStorage(){
    var token:string
    if(localStorage.getItem('(O,,O)') !== null){
         token = JSON.parse(localStorage.getItem('(O,,O)'))
         return token
    }  
    
  }

  setUserIdInStorage(userId:number){
    var code = this.userCodeEnctryptService.encryptCode(userId)
    localStorage.setItem('x-tom------>____ <o_o> ____<----x-tom', JSON.stringify(code))
  }


  getUserIdInStorage(){
    var code:string = JSON.parse(localStorage.getItem('x-tom------>____ <o_o> ____<----x-tom'))
    var token:string = this.getTokenInLocalStorage()
    var userId:number  = this.userCodeEnctryptService.decryptCode(code)
    this.userSession.token = token

    // ---> localhost
    this.http.get<User>("http://localhost:8080/user/"+userId).subscribe(
      response =>{
          this.userSession.user = response
          this.role = response.user_role
          this.name = response.user_firstName
          this.session.next(this.userSession)
      }
    )

    // ---->remote
    // this.http.get<User>("https://x-tom-api.herokuapp.com/user/"+userId).subscribe(
    //   response =>{
    //       this.userSession.user = response
    //       this.role = response.user_role
    //       this.name = response.user_firstName
    //       this.session.next(this.userSession)
    //   }
    // )

  }


  // ---> localhost
  passwordResetVerifyUser(email:string){
    return this.http.post<boolean>("http://localhost:8090/password-reset/verify-user", email)
  }

// ---->remote
// passwordResetVerifyUser(email:string){
//   return this.http.post<boolean>("https://x-tom-auth.herokuapp.com/password-reset/verify-user", email)
// }

  // ---> localhost
  passwordResetCheckCode(passwordResetData:PasswrodResetData){
    return this.http.post<boolean>("http://localhost:8090/password-reset/check-code", passwordResetData)
  }

// ---->remote
// passwordResetCheckCode(passwordResetData:PasswrodResetData){
//   return this.http.post<boolean>("https://x-tom-auth.herokuapp.com/password-reset/check-code", passwordResetData)
// }

  // ---> localhost
  passwordResetSetNew(passwordResetData:PasswrodResetData){
    return this.http.post<boolean>("http://localhost:8090/password-reset/set-new", passwordResetData)
  }

// ---->remote
// passwordResetSetNew(passwordResetData:PasswrodResetData){
//   return this.http.post<boolean>("https://x-tom-auth.herokuapp.com/password-reset/set-new", passwordResetData)
// }

  // ---> localhost
  changePassword(changePasswordData:ChangePassword){
    return this.http.put<boolean>("http://localhost:8080/user/change-password", changePasswordData)
  }

// ---->remote
// changePassword(changePasswordData:ChangePassword){
//   return this.http.put<boolean>("https://x-tom-api.herokuapp.com/user/change-password", changePasswordData)
// }

// ---> localhost
  changeEmail(changeEmailData:ChangeEmail){
    return this.http.put<boolean>("http://localhost:8080/user/change-email", changeEmailData)
  }

// ---->remote
// changeEmail(changeEmailData:ChangeEmail){
//   return this.http.put<boolean>("https://x-tom-api.herokuapp.com/user/change-email", changeEmailData)
// }

  // ---> localhost
  confirmPassword(changePasswordData:ChangePassword){
    return this.http.post<boolean>("http://localhost:8080/user/confirm-password", changePasswordData)
  }

  // ---->remote
  // confirmPassword(changePasswordData:ChangePassword){
  //   return this.http.post<boolean>("https://x-tom-api.herokuapp.com/user/confirm-password", changePasswordData)
  // }

}
