import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-user-by-id',
  templateUrl: './user-by-id.component.html',
  styleUrls: ['./user-by-id.component.css']
})
export class UserByIdComponent implements OnInit {

  
  constructor(private http:UsersService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()
   }

   id:number

   user = this.route.paramMap.pipe(
    map(params => +params.get('user_id')),
    switchMap(id => this.http.getById(id))
  )
  
  ngOnInit() {
  }

}
