import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './laptop.component';

const routes: Routes = [
  {
    path: 'laptop',
    component: LaptopComponent
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
export class LaptopRoutingModule { }
