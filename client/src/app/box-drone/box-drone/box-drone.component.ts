import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products/products.service';
import { ProductTest } from 'src/app/model/productTest';

@Component({
  selector: 'box-drone',
  templateUrl: './box-drone.component.html',
  styleUrls: ['./box-drone.component.css']
})
export class BoxDroneComponent implements OnInit {

  constructor(private productsService:ProductsService) { }

  ngOnInit(): void {

    this.productsService.getByType("drone").subscribe(response=>{

      for(var i = 0; i <= 3; i++ ){
        if(i == 0){
          this.item1 = response[i]
        }

        if(i == 1){
          this.item2 = response[i]
        }

        if(i == 2){
          this.item3 = response[i]
        }

        if(i == 3){
          this.item4 = response[i]
        }
      }

    })

    
  }

  item1:ProductTest
  item2:ProductTest
  item3:ProductTest
  item4:ProductTest

}
