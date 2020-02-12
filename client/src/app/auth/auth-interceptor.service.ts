import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, empty } from 'rxjs';
import { AuthService } from './auth.service';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
   return next.handle(this.getAuthorizedRequest(req)).pipe(
      catchError((err, caught)=>{

        if(err instanceof HttpErrorResponse && err.status === 401){
            this.auth.logout('Sesja wygasła! Zaloguj się ponownie!')
            return empty()
        }

        return Observable.throw(err)
      })
   )

  }

  getAuthorizedRequest(req:HttpRequest<any>){
    return req.clone({
      setHeaders:{
        'Authorization': 'Bearer ' + this.auth.getToken()
      }
    })
  }

  constructor(private auth:AuthService) { }
}
