import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'error-handler',
  templateUrl: './error-handler.component.html',
  styleUrls: ['./error-handler.component.css']
})

export class ErrorHandlerComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  @Input()
  errorHandler


}
