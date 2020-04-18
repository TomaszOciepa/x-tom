import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from '../model/userList';
import { User } from '../model/user';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private appService:AppService) {}

  getAll(){
    return this.http.get<UserList>(this.appService.urlApi+"/user/all")
  }

  getById(id:number){
    return this.http.get<User>(this.appService.urlApi+"/user/"+id)
  }

  update(id:number, user:Partial<User>){
    return this.http.put<User>(this.appService.urlApi+"/user/"+id, user)
  }

  updateRole(id:number, user:Partial<User>){
    return this.http.put<User>(this.appService.urlApi+"/user/role/"+id, user)
  }

  delete(id:number){
    return this.http.delete(this.appService.urlApi+"/user/"+id)
  }

}