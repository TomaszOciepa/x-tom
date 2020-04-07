import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductsService } from 'src/app/products/products.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  constructor(private http:ProductsService, public auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('product_id')
    })
  }

  id:number
  error: boolean;

  remove:boolean = false

  delete(){
      this.http.delete(this.id).subscribe(()=>{
        console.log("Success")
      },err=>{
        this.error = err.message
      })

      this.remove = true
  }

  ngOnInit() {
  }

}
