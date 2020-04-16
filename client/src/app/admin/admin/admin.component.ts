import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(public auth:AuthService) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {
    document.scrollingElement.scrollTop = 0
  }

}
