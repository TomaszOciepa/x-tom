import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/orders/orders.service';
import { Order } from 'src/app/model/order';

@Component({
  selector: 'order-detail-form',
  templateUrl: './order-detail-form.component.html',
  styleUrls: ['./order-detail-form.component.css']
})
export class OrderDetailFormComponent implements OnInit {

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
    document.scrollingElement.scrollTop = 0
  }

  orderId:number
  order:Order
  error:boolean
  saved:boolean = false
  valid:boolean = false

  orderDetailForm = this.fb.group({    
    orders_status: this.fb.control('',[
      Validators.required,
    ]), 
    orders_number_delivery_days: this.fb.control('',[
      Validators.required,
    ]), 
    orders_delivery_method: this.fb.control('',[
      Validators.required,
    ]), 
    orders_payments_method: this.fb.control('',[
      Validators.required,
    ]), 
  })

  save(){

    if(this.orderDetailForm.valid){
      this.valid = false
      this.ordersService.editDetail(this.orderId, this.orderDetailForm.value).subscribe( () =>{
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
