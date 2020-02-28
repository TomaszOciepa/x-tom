import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartphoneComponent } from './smartphone.component';
<<<<<<< HEAD

const routes: Routes = [
  {
    path: 'smartphone',
    component: SmartphoneComponent
=======
import { SmartphoneByIdComponent } from './smartphone-by-id/smartphone-by-id.component';

const routes: Routes = [
  {
    path: 'smartphones',
    component: SmartphoneComponent
  },
  {
    path: 'smartphone/:smartphone_id',
    component: SmartphoneByIdComponent
>>>>>>> routing
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
<<<<<<< HEAD
  ]
=======
  ],
>>>>>>> routing
})
export class SmartphoneRoutingModule { }
