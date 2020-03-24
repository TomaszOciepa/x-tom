import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { UserCodeEncryptService } from './auth/user-code-encrypt.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private auth:AuthService, private userSessionStorage:UserCodeEncryptService){}

  ngOnInit(){
    if(localStorage.getItem('x-tom------>____ <o_o> ____<----x-tom') !== null){
      this.auth.getUserIdInStorage()
    }
  }
  
}
