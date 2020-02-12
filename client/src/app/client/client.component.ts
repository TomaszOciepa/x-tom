import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  tab = '';

  constructor(protected auth:AuthService) { 
    this.auth.state.subscribe(
      authorized => this.tab = authorized? 'profile': 'login'
    )
  }

  ngOnInit() {
  }

}
