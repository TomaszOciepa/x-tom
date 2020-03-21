import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent implements OnInit {

  constructor(private fb:FormBuilder, protected auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.user = this.auth.getCurrentUser()
  }

  user:User
  orderSummary:Order

  addOrderForm = this.fb.group({    
    orders_delivery_method: this.fb.control(''), 
    orders_payments_method: this.fb.control(''), 
    orders_firstName: this.fb.control(''), 
    orders_lastName: this.fb.control(''), 
    orders_street: this.fb.control(''),
    orders_zipCode: this.fb.control(''),
    orders_city: this.fb.control(''),
    orders_email: this.fb.control(''),
    orders_phoneNumber: this.fb.control(''),
  })

  saveOrderSummary(){
    this.orderSummary = this.addOrderForm.value
    this.router.navigate(['/podsumowanie'], { queryParams: {order_data: JSON.stringify(this.orderSummary) } });
  }

}
