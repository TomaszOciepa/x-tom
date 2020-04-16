import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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

  constructor(private fb:FormBuilder, public auth:AuthService, private router: Router) { }

  ngOnInit() {
    document.scrollingElement.scrollTop = 0
    this.user = this.auth.getCurrentUser()
  }

  user:User
  orderSummary:Order

  addOrderForm = this.fb.group({    
    orders_delivery_method: this.fb.control('', [
      Validators.required,
    ]), 
    orders_payments_method: this.fb.control('', [
      Validators.required,
    ]), 
    orders_firstName: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]), 
    orders_lastName: this.fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]), 
    orders_street: this.fb.control('', [
      Validators.required,
    ]),
    orders_zipCode: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^\d{2}-\d{3}$/)
    ]),
    orders_city: this.fb.control('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/)
    ]),
    orders_email: this.fb.control('', [
      Validators.required,
      Validators.email
    ]),
    orders_phoneNumber: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/)
    ]),

  })

  valid:boolean = false;

  saveOrderSummary(){
    if(this.addOrderForm.valid){
      this.valid = false
      this.orderSummary = this.addOrderForm.value
      this.router.navigate(['/podsumowanie'], { queryParams: {order_data: JSON.stringify(this.orderSummary) } });
    }else{
      this.valid = true
    }
    
  }

}
