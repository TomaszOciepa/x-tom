import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'box-mobile',
  templateUrl: './box-mobile.component.html',
  styleUrls: ['./box-mobile.component.css']
})
export class BoxMobileComponent implements OnInit {

  constructor(private fb:FormBuilder, private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  durationInSeconds = 5;

  newsletterForm = this.fb.group({
    email: this.fb.control('', [
    Validators.required,
    Validators.email
    ]),
  })

  send(){

    var msg = ""

    if(this.newsletterForm.valid){
      msg = "Twój e-mail został zapisany."
    }else{
      msg = "Wypełnij poprawnie formularz!!!"
    }

    console.log("wysłano")
    this.snackbar.open(msg,'',{
      duration: 4000,
      verticalPosition:'top'
    })
  }

}


