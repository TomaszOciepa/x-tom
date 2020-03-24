import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/cart/cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(protected auth:AuthService, private cartService:CartService ,private fb:FormBuilder) { 
    this.auth.state.subscribe()
  }

  ngOnInit() {
  }

}
