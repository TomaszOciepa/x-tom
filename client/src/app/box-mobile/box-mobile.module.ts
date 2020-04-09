import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxMobileComponent } from './box-mobile/box-mobile.component';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSnackBarModule} from '@angular/material/snack-bar'


@NgModule({
  declarations: [BoxMobileComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  exports: [
    BoxMobileComponent
  ]
})
export class BoxMobileModule { }
