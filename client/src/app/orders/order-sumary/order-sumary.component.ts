import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/auth/auth.service';
import { OrderItem } from 'src/app/model/orderItem';


@Component({
  selector: 'order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.css']
})
export class OrderSumaryComponent implements OnInit {

  constructor(private route:ActivatedRoute, protected auth:AuthService) { 
    this.auth.state.subscribe()

    this.route.queryParams.subscribe(param =>{
      this.orderData = JSON.parse(param['order_data']) 
    })

  }

  ngOnInit() {
  }
  
  pathOrder:boolean = true
  saved:boolean = false
  orderItem:OrderItem
  orderData:Order
  
  save(){
    this.saved = true
    
    if(this.auth.isAuthenticated){
        this.orderData.user = this.auth.getCurrentUser();

    }


  }
}
