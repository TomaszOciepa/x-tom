import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserList } from '../model/userList';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) {}

  // ---> localhost
  // getAll(){
  //   return this.http.get<UserList>("http://localhost:8080/user/all")
  // }

  // ----> remote
  getAll(){
    return this.http.get<UserList>("https://x-tom-api.herokuapp.com/user/all")
  }
  
// ---> localhost
  // getById(id:number){
  //   return this.http.get<User>("http://localhost:8080/user/"+id)
  // }

// ----> remote
  getById(id:number){
    return this.http.get<User>("https://x-tom-api.herokuapp.com/user/"+id)
  }

// ---> localhost
  // update(id:number, user:Partial<User>){
  //   return this.http.put<User>("http://localhost:8080/user/"+id, user)
  // }

// ----> remote
update(id:number, user:Partial<User>){
  return this.http.put<User>("https://x-tom-api.herokuapp.com/user/"+id, user)
}

  // ---> localhost
  // updateRole(id:number, user:Partial<User>){
  //   return this.http.put<User>("http://localhost:8080/user/role/"+id, user)
  // }

// ----> remote
updateRole(id:number, user:Partial<User>){
    return this.http.put<User>("https://x-tom-api.herokuapp.com/user/role/"+id, user)
  }

// ---> localhost
  // delete(id:number){
  //   return this.http.delete("http://localhost:8080/user/"+id)
  // }

// ----> remote
delete(id:number){
  return this.http.delete("https://x-tom-api.herokuapp.com/user/"+id)
}

}