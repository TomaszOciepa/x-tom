import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ProductsService } from '../../products.service';
import { Product } from '../../model/product';

@Component({
  selector: 'add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {


  addProductForm = this.fb.group({
    name:[''],
    category:[''],
    description:[''],
    price:[''],
    amount:[''],
  })

  error: boolean;
  
  addProduct(){
    console.log(this.addProductForm.value)
    this.productsService.create(this.addProductForm.value)
    .subscribe(()=>{
      console.log("Success")
    },err=>{
      this.error = err.message
    }
    )
    
  }

  constructor(private fb:FormBuilder, private productsService:ProductsService) { }

  ngOnInit() {
    
  }

}
