import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from '../model/userList';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  getAll(){
    return this.http.get<UserList>("http://localhost:8080/user/all")
  }

  getById(id:number){
    return this.http.get<User>("http://localhost:8080/user/"+id)
  }

  update(id:number, user:Partial<User>){
    return this.http.put<User>("http://localhost:8080/user/"+id, user)
  }
  
  updateRole(id:number, user:Partial<User>){
    return this.http.put<User>("http://localhost:8080/user/role/"+id, user)
  }

  delete(id:number){
    return this.http.delete("http://localhost:8080/user/"+id)
  }
}
