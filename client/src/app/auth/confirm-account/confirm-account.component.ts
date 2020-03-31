import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-account',
  templateUrl: './confirm-account.component.html',
  styleUrls: ['./confirm-account.component.css']
})
export class ConfirmAccountComponent implements OnInit {

  constructor(private registerService:RegisterService, private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.paramMap.subscribe(params =>{
      this.code = params.get('code'),
      this.email = params.get('email')
      })
    
    this.registerService.confirmAccount(this.code, this.email).subscribe(response =>{
        this.accountConfirmation = response
        this.init = true
    })
  }

code:string
email:string
init:boolean = false
accountConfirmation:boolean


}
