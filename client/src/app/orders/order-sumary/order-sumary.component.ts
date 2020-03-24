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

  constructor(private route:ActivatedRoute, protected auth:AuthService, private ordersService:OrdersService, private cartService:CartService) { 
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

  

  getOrderItemCart(item:OrderItem[]){
    this.orderItemList = item
      item.forEach(item =>{
        console.log("items: "+JSON.stringify(item.order_item_amount))
      })

  }

  getOrderSumCart(sum:number){
    console.log("suma koszyka to: "+sum)
  }

  save(){
   this.saveOrderItem().subscribe( (response:number)=>{
    this.saveOrder(response)
   })

    this.saved = true
  }

  saveOrderItem(){
      return this.ordersService.createOrderItem(this.orderItemList)
  }

  saveOrder(number:number){
    console.log("save order: "+number)
    console.log("JSON 1: "+JSON.stringify(this.orderData))
    this.orderData.orders_number = number

    if(this.auth.isAuthenticated){
      this.orderData.user = this.auth.getCurrentUser()
    }
    console.log("JSON 2: "+JSON.stringify(this.orderData))
    this.ordersService.createOrder(this.orderData).subscribe( response =>{
      console.log("Success")
    }
    )

    if(this.auth.isAuthenticated){
        console.log("jestem zalogowany i ususwam koszyk: użytkownika o id: "+this.auth.getCurrentUser().user_id)
        this.cartService.deleteMyCart(this.auth.getCurrentUser().user_id).subscribe(response =>{
          console.log("koszyk został wyczyszczony")
        })
    }else{
      localStorage.removeItem('products')
    }

  }


}
