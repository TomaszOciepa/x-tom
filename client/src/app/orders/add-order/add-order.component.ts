import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.css']
})
export class AddOrderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  pathOrder:boolean = true
}
