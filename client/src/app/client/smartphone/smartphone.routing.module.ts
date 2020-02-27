import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartphoneComponent } from './smartphone.component';

const routes: Routes = [
  {
    path: 'smartphone',
    component: SmartphoneComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class SmartphoneRoutingModule { }
