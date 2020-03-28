import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'validation-order-address',
  templateUrl: './validation-order-address.component.html',
  styleUrls: ['./validation-order-address.component.css']
})
export class ValidationOrderAddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  control
  
}
