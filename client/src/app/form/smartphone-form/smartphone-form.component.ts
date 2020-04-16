import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { ProductTest } from 'src/app/model/productTest';

@Component({
  selector: 'smartphone-form',
  templateUrl: './smartphone-form.component.html',
  styleUrls: ['./smartphone-form.component.css']
})
export class SmartphoneFormComponent implements OnInit {

  constructor(private fb:FormBuilder, public auth:AuthService) { 
    this.auth.state.subscribe()
  }
  
  ngOnInit() {
    document.scrollingElement.scrollTop = 0
  }

  product
  productType = "smartphones"
  updateProduct:ProductTest
  saved:boolean = false
  valid:boolean = false

  productForm = this.fb.group({    
    
    product_type: this.fb.control('smartphone'), 
    product_mark: this.fb.control('', [
      Validators.required,
      
    ]), 
    product_status: this.fb.control('', [
      Validators.required,
    ]), 
    product_description: this.fb.control('', [
      Validators.required,
      Validators.minLength(20)
    ]), 
    product_processor: this.fb.control('brak'), 
    product_system: this.fb.control('', [
      Validators.required,
    ]), 
    product_camera: this.fb.control('brak'), 
    product_disc_type: this.fb.control('brak'), 
    product_graphics_card: this.fb.control('brak'), 
    product_price: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]), 
    product_ram_size: this.fb.control('', [
      Validators.required,
    ]), 
    product_disc_size: this.fb.control('', [
      Validators.required,
    ]), 
    product_screen_diagonal: this.fb.control('', [
      Validators.required,
    ]), 
    product_amount_available: this.fb.control('', [
      Validators.required,
      Validators.pattern(/^[0-9]+$/),
    ]), 
    product_camera_resolution: this.fb.control('', [
      Validators.required, 
    ]), 
    product_time_work: this.fb.control('0'), 
    product_range: this.fb.control('0'),
  })

  @Input("getProduct")
  set getId(product){
    this.product = product
    this.changeProductMarkOnNumber()
  }

  @Output('saveProduct')
  emiterSaveProduct = new EventEmitter()

  saveProduct(){

    if(this.productForm.valid){
      this.valid = false
      this.updateProduct = this.productForm.value
      this.changeProductMarkOnString()
      this.emiterSaveProduct.emit(this.updateProduct)
      this.saved = true;
    }else{
      this.valid = true
    }
    
  }


  changeProductMarkOnNumber(){
    this.product.product_mark

    switch (this.product.product_mark) {
      case "samsung":
          console.log("samsung 1");
          this.product.product_mark = "1"
          break;
      case "apple":
          console.log("Apple 2");
          this.product.product_mark = "2"
          break;
      case "huawei":
          console.log("Huawei 3");
          this.product.product_mark = "3"
          break;
      case "sony":
          console.log("sony 4");
          this.product.product_mark = "4"
          break;
      case "nokia":
          console.log("nokia 5");
          this.product.product_mark = "5"
          break;
      case "xiaomi":
          console.log("xiaomi 6");
          this.product.product_mark = "6"
          break;
      case "lg":
          console.log("lg 7");
          this.product.product_mark = "7"
          break;
      case "htc":
          console.log("htc 8");
          this.product.product_mark = "8"
          break;
      default:
          console.log("brak");
          this.product.product_mark = "brak"
          break;
  }
  }

  changeProductMarkOnString(){
    this.updateProduct.product_mark

    switch (this.updateProduct.product_mark) {
      case "1":
          console.log("samsung");
          this.updateProduct.product_mark = "samsung"
          break;
      case "2":
          console.log("apple");
          this.updateProduct.product_mark = "apple"
          break;
      case "3":
          console.log("huawei");
          this.updateProduct.product_mark = "huawei"
          break;
      case "4":
          console.log("sony");
          this.updateProduct.product_mark = "sony"
          break;
      case "5":
          console.log("nokia");
          this.updateProduct.product_mark = "nokia"
          break;
      case "6":
          console.log("xiaomi");
          this.updateProduct.product_mark = "xiaomi"
          break;
      case "7":
          console.log("lg");
          this.updateProduct.product_mark = "lg"
          break;
      case "8":
          console.log("htc");
          this.updateProduct.product_mark = "htc"
          break;
      default:
          console.log("brak");
          this.updateProduct.product_mark = "brak"
          break;
  }
  }

}
