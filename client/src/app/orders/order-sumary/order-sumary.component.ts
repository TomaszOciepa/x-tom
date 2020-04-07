import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/model/order';
import { AuthService } from 'src/app/auth/auth.service';
import { OrderItem } from 'src/app/model/orderItem';
import { OrdersService } from '../orders.service';
import { CartService } from 'src/app/cart/cart.service';


@Component({
  selector: 'order-sumary',
  templateUrl: './order-sumary.component.html',
  styleUrls: ['./order-sumary.component.css']
})
export class OrderSumaryComponent implements OnInit {

  constructor(private route:ActivatedRoute, public auth:AuthService, private ordersService:OrdersService, private cartService:CartService) { 
    this.auth.state.subscribe()

    this.route.queryParams.subscribe(param =>{
      this.orderData = JSON.parse(param['order_data']) 
    })

  }

  ngOnInit() {
  }
  
  pathOrder:boolean = true
  saved:boolean = false
  orderItemList:OrderItem[]
  orderData:Order
  sumOrder:number = 0
  
  getOrderItemCart(item:OrderItem[]){
    this.orderItemList = item
  }

  save(){
   this.saveOrderItem().subscribe( (response:number)=>{
    this.saveOrder(response)
   })

    this.saved = true
  }

  saveOrderItem(){
    this.orderItemList.forEach(item =>{
    this.sumOrder += (item.product.product_price * item.order_item_amount)

    })
    return this.ordersService.createOrderItem(this.orderItemList)

  }

  saveOrder(number:number){
    this.orderData.orders_number = number
    this.orderData.orders_payments_sum = this.sumOrder
    if(this.auth.isAuthenticated){
      this.orderData.user = this.auth.getCurrentUser()
    }
    this.ordersService.createOrder(this.orderData).subscribe()

    if(this.auth.isAuthenticated){
        this.cartService.deleteMyCart(this.auth.getCurrentUser().user_id).subscribe(response =>{
        })
    }else{
      localStorage.removeItem('products')
    }

  }


}
