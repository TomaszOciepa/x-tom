import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductTest } from 'src/app/model/productTest';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'laptop-form',
  templateUrl: './laptop-form.component.html',
  styleUrls: ['./laptop-form.component.css']
})
export class LaptopFormComponent implements OnInit {

  constructor(private fb:FormBuilder, protected auth:AuthService) { 
    this.auth.state.subscribe()
  }
  
  editedLaptopForm = this.fb.group({    
    
    product_type: this.fb.control('laptop'), 
    product_mark: this.fb.control('', [
      Validators.required,
      Validators.minLength(3)
    ]), 
    product_status: this.fb.control(''), 
    product_description: this.fb.control(''), 
    product_processor: this.fb.control(''), 
    product_system: this.fb.control(''), 
    product_camera: this.fb.control('brak'), 
    product_disc_type: this.fb.control(''), 
    product_graphics_card: this.fb.control(''), 
    product_price: this.fb.control(''), 
    product_ram_size: this.fb.control(''), 
    product_disc_size: this.fb.control(''), 
    product_screen_diagonal: this.fb.control(''), 
    product_amount_available: this.fb.control(''), 
    product_camera_resolution: this.fb.control('0'), 
    product_time_work: this.fb.control('0'), 
    product_range: this.fb.control('0'),
  })

  product
  saved:boolean = false

  updateProduct:ProductTest

  @Input("getProduct")
  set getId(product){
    this.product = product
    this.changeProductMarkOnNumber()
    this.changeProductStatusOnNumber()
  }

  @Output('saveProduct')
  emiterSaveProduct = new EventEmitter()

  saveProduct(){
    console.log("zaktualizowany: "+this.editedLaptopForm.value)
    this.updateProduct = this.editedLaptopForm.value
    this.changeProductMarkOnString()
    this.changeProductStatusOnString()
    this.emiterSaveProduct.emit(this.updateProduct)
    
    this.saved = true;
  }

  changeProductMarkOnNumber(){
    this.product.product_mark

    switch (this.product.product_mark) {
      case "lenovo":
          console.log("lenovo 1");
          this.product.product_mark = "1"
          break;
      case "hp":
          console.log("hp 2");
          this.product.product_mark = "2"
          break;
      case "dell":
          console.log("dell 3");
          this.product.product_mark = "3"
          break;
      case "asus":
          console.log("asus 4");
          this.product.product_mark = "4"
          break;
      case "acer":
          console.log("acer 5");
          this.product.product_mark = "5"
          break;
      case "msi":
          console.log("msi 6");
          this.product.product_mark = "6"
          break;
      case "apple":
          console.log("apple 7");
          this.product.product_mark = "7"
          break;
      case "huawei":
          console.log("huawei 8");
          this.product.product_mark = "8"
          break;
      case "microsoft":
          console.log("microsoft 9");
          this.product.product_mark = "9"
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
          console.log("lenovo");
          this.updateProduct.product_mark = "lenovo"
          break;
      case "2":
          console.log("hp");
          this.updateProduct.product_mark = "hp"
          break;
      case "3":
          console.log("dell");
          this.updateProduct.product_mark = "dell"
          break;
      case "4":
          console.log("asus");
          this.updateProduct.product_mark = "asus"
          break;
      case "5":
          console.log("acer");
          this.updateProduct.product_mark = "acer"
          break;
      case "6":
          console.log("msi");
          this.updateProduct.product_mark = "msi"
          break;
      case "7":
          console.log("apple");
          this.updateProduct.product_mark = "apple"
          break;
      case "8":
          console.log("huawei");
          this.updateProduct.product_mark = "huawei"
          break;
      case "9":
          console.log("microsoft");
          this.updateProduct.product_mark = "microsoft"
          break;
      default:
          console.log("brak");
          this.updateProduct.product_mark = "brak"
          break;
  }
  }

  changeProductStatusOnNumber(){
    this.product.product_status

    switch (this.product.product_status) {
      case "promocja":
          console.log("promocja 1");
          this.product.product_status = "1"
          break;
      case "wyprzedaż":
          console.log("wyprzedaż 2");
          this.product.product_status = "2"
          break;
      case "nowość":
          console.log("nowość 3");
          this.product.product_status = "3"
          break;
      case "polecamy":
          console.log("polecamy 4");
          this.product.product_status = "4"
          break;
      case "przedłużona gwarancja":
          console.log("przedłużona gwarancja 5");
          this.product.product_status = "5"
          break;
      default:
          console.log("brak");
          this.product.product_mark = "brak"
          break;
  }
  }

  changeProductStatusOnString(){
    this.updateProduct.product_status

    switch (this.updateProduct.product_status) {
      case "1":
          console.log("promocja");
          this.updateProduct.product_status = "promocja"
          break;
      case "2":
          console.log("wyprzedaż");
          this.updateProduct.product_status = "wyprzedaż"
          break;
      case "3":
          console.log("nowość");
          this.updateProduct.product_status = "nowość"
          break;
      case "4":
          console.log("polecamy");
          this.updateProduct.product_status = "polecamy"
          break;
      case "5":
          console.log("przedłużona gwarancja");
          this.updateProduct.product_status = "przedłużona gwarancja"
          break;
      default:
          console.log("brak");
          this.updateProduct.product_status = "brak"
          break;
  }
  }
  ngOnInit() {
  }

}
