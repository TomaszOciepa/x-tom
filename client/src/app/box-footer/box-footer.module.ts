import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoxFooterRoutingModule } from './box-footer-routing.module';
import { BoxFooterComponent } from './box-footer/box-footer.component';



@NgModule({
  declarations: [BoxFooterComponent],
  imports: [
    CommonModule,
    BoxFooterRoutingModule
  ],
  exports: [BoxFooterComponent]
})
export class BoxFooterModule { }
