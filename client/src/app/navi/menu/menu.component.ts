import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(protected auth:AuthService) {
    this.auth.state.subscribe()
   }

  ngOnInit() {
    console.log("sprawdzam auth: "+this.auth.isAuthenticated)
    
    
  }

}
