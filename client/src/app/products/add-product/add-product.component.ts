import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductTest } from 'src/app/model/productTest';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  constructor(private fb:FormBuilder, public auth:AuthService, private http:ProductsService,) {
    this.auth.state.subscribe()
   }
   editedProduct:ProductTest
   error

   selectProductForm = this.fb.group({    
    product_type: this.fb.control(''), 
  })

  addProduct(product){
    this.http.create(product)
    .subscribe(()=>{
      console.log("Success")   
    },err=>{
      this.error = err.message
    })
  }
  
  ngOnInit() {
    document.scrollingElement.scrollTop = 0
  }

}
