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
  getAll(){
    return this.http.get<UserList>("http://localhost:8080/user/all")
  }

  // ----> remote
  // getAll(){
  //   return this.http.get<UserList>("https://x-tom-api.herokuapp.com/user/all")
  // }
  
    // ----> remote aws
    // getAll(){
    //   return this.http.get<UserList>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8080/user/all")
    // }

// ---> localhost
  getById(id:number){
    return this.http.get<User>("http://localhost:8080/user/"+id)
  }

// ----> remote
  // getById(id:number){
  //   return this.http.get<User>("https://x-tom-api.herokuapp.com/user/"+id)
  // }

// ----> remote aws
// getById(id:number){
//   return this.http.get<User>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8080/user/"+id)
// }

// ---> localhost
  update(id:number, user:Partial<User>){
    return this.http.put<User>("http://localhost:8080/user/"+id, user)
  }

// ----> remote
// update(id:number, user:Partial<User>){
//   return this.http.put<User>("https://x-tom-api.herokuapp.com/user/"+id, user)
// }

// ----> remote aws
// update(id:number, user:Partial<User>){
//   return this.http.put<User>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8080/user/"+id, user)
// }

  // ---> localhost
  updateRole(id:number, user:Partial<User>){
    return this.http.put<User>("http://localhost:8080/user/role/"+id, user)
  }

// ----> remote
// updateRole(id:number, user:Partial<User>){
//     return this.http.put<User>("https://x-tom-api.herokuapp.com/user/role/"+id, user)
//   }

// ----> remote aws
// updateRole(id:number, user:Partial<User>){
//   return this.http.put<User>("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8080/user/role/"+id, user)
// }

// ---> localhost
  delete(id:number){
    return this.http.delete("http://localhost:8080/user/"+id)
  }

// ----> remote
// delete(id:number){
//   return this.http.delete("https://x-tom-api.herokuapp.com/user/"+id)
// }

// ----> remote aws
// delete(id:number){
//   return this.http.delete("http://ec2-52-57-86-39.eu-central-1.compute.amazonaws.com:8080/user/"+id)
// }

}