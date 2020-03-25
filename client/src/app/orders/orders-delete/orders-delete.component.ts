import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { OrdersService } from '../orders.service';

@Component({
  selector: 'app-orders-delete',
  templateUrl: './orders-delete.component.html',
  styleUrls: ['./orders-delete.component.css']
})
export class OrdersDeleteComponent implements OnInit {

  constructor(protected auth:AuthService, private route:ActivatedRoute, private router: Router, private ordersService:OrdersService) {
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.orderId = +params.get('order_id')
    })

   }

  ngOnInit() {
  }

  orderId:number
  remove:boolean = false
  delete(){

    this.ordersService.deleteOrder(this.orderId).subscribe(()=>{
      console.log("usunięto zamówienie")
    })

    this.remove = true
  }
}
