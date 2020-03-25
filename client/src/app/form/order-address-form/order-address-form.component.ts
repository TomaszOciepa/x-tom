import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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

  constructor(private fb:FormBuilder, protected auth:AuthService, private route:ActivatedRoute, private router: Router, private ordersService:OrdersService) {
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

  orderAddressForm = this.fb.group({    
    orders_firstName: this.fb.control(''), 
    orders_lastName: this.fb.control(''), 
    orders_email: this.fb.control(''), 
    orders_phoneNumber: this.fb.control(''),
    orders_zipCode: this.fb.control(''),
    orders_city: this.fb.control(''),
    orders_street: this.fb.control(''),
  })

  save(){

    this.ordersService.editAddress(this.orderId, this.orderAddressForm.value).subscribe( () =>{
      console.log("Success")
    },err=>{
      this.error = err.message
      console.log("error: "+this.error.valueOf)
    }
    )
    this.saved = true
  }

}
