import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';
import { ProductTest } from 'src/app/model/productTest';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {

  constructor(protected auth:AuthService, private productsService:ProductsService) { 
    this.auth.state.subscribe()

    if(this.auth.isAuthenticated){
      this.productsService.getAll().subscribe(response =>{
        this.product = response
      })
    }

  }

  ngOnInit() {
  }

product:ProductTest[]

}
