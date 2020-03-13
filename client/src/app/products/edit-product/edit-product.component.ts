import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/products/products.service';
import { ProductTest } from 'src/app/client/model/productTest';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private http:ProductsService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('product_id')
    })

    this.http.getById(this.id).subscribe(response =>{
      this.editedProduct = response
      this.typeProduct = response.product_type
    })

   }

   id:number
   editedProduct:ProductTest
   typeProduct:string
   error:boolean
   saved:boolean = false



  // saveDrone(){
  //   console.log(this.editDroneForm.value)
  //   this.http.update(this.id, this.editDroneForm.value)
  //   .subscribe(()=>{
  //     console.log("Success")
  //     this.saved = true
  //   },err=>{
  //     this.error = err.message
  //   })
  // }

  ngOnInit() {
      
  }

}
