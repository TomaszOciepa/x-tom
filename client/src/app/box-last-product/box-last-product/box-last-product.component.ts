import { Component, OnInit } from '@angular/core';
import { ProductTest } from 'src/app/model/productTest';
import { Router } from '@angular/router';

@Component({
  selector: 'box-last-product',
  templateUrl: './box-last-product.component.html',
  styleUrls: ['./box-last-product.component.css']
})
export class BoxLastProductComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.getLastProducts()

  }

  lastProductList:ProductTest[] = []
  empty:boolean = false;

  getLastProducts(){
    var lastProduct:ProductTest[] = []
    lastProduct = JSON.parse(localStorage.getItem('lastProduct'))

    if( lastProduct == null || lastProduct.length == 0){
      this.empty = true
    }else{
      this.lastProductList = lastProduct
    }
  }

  

  reload(id:number){
    this.router.navigate(['/product', id]);

    setTimeout(function(){
      window.location.reload()
    },300);
  
  }

}
