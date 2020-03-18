import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UserList } from 'src/app/model/userList';

@Component({
  selector: 'users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private http:UsersService, protected auth:AuthService) {
    this.auth.state.subscribe()    
   }

   usersList:UserList

   getAllUsers(){
    this.http.getAll().subscribe(response =>{
      this.usersList = response;
    })
  }

  ngOnInit() {
    this.getAllUsers()
  }

}
