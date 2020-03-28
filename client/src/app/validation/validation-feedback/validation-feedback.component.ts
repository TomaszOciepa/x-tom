import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'validation-feedback',
  templateUrl: './validation-feedback.component.html',
  styleUrls: ['./validation-feedback.component.css']
})
export class ValidationFeedbackComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input()
  control

}
