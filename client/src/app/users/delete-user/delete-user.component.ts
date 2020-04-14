import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private http:UsersService, public auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('user_id')
    })
  }

  id:number
  error: boolean;

  remove:boolean = false

  delete(){
    this.http.delete(this.id).subscribe(()=>{
      console.log("Success")
    },err=>{
      this.error = err.message
    })

    this.remove = true
}

  ngOnInit() {
  }

}
