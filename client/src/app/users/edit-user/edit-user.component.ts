import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private http:UsersService, public auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('user_id')
    })


    this.http.getById(this.id).subscribe(response =>{
      this.editedUser = response
    })
   }

   id:number
   editedUser:User
   error:boolean
   returnPath = 'user'

   updateUser(user){
    console.log(user)
    this.http.update(this.id, user)
    .subscribe(()=>{
      console.log("Success")
    },err=>{
      this.error = err.message
      console.log("error: "+this.error.valueOf)
    })
  }

  ngOnInit() {
  }

}
