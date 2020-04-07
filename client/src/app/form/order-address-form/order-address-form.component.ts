import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from 'src/app/orders/orders.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'app-order-address-form',
  templateUrl: './order-address-form.component.html',
  styleUrls: ['./order-address-form.component.css']
})
export class OrderAddressFormComponent implements OnInit {

  constructor(private fb:FormBuilder, public auth:AuthService, private route:ActivatedRoute, private ordersService:OrdersService) {
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.orderId = +params.get('order_id')
    })

    this.ordersService.getOrdersById(this.orderId).subscribe(response =>{
      this.order = response;
    })

   }

  ngOnInit() {
  }

  orderId:number
  order:Order
  error:boolean
  saved:boolean = false
  valid:boolean = false

  orderAddressForm = this.fb.group({    
    orders_firstName: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]), 
    orders_lastName: this.fb.control('', [
      Validators.required,
      Validators.minLength(2)
    ]), 
    orders_email: this.fb.control('', [
      Validators.required,
      Validators.email
    ]), 
    orders_phoneNumber: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/)
    ]),
    orders_zipCode: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^\d{2}-\d{3}$/)
    ]),
    orders_city: this.fb.control('', [
      Validators.required,
      Validators.pattern(/[a-zA-Z]+(?:[ '-][a-zA-Z]+)*/)
    ]),
    orders_street: this.fb.control('', [
      Validators.required,
    ]),
  })

  save(){

    if(this.orderAddressForm.valid){
      this.valid = false
      this.ordersService.editAddress(this.orderId, this.orderAddressForm.value).subscribe( () =>{
        console.log("Success")
      },err=>{
        this.error = err.message
        console.log("error: "+this.error.valueOf)
      }
      )
      this.saved = true
    }else{
      this.valid = true
    }

    
  }

}
