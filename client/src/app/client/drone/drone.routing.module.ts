import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneComponent } from './drone.component';

const routes: Routes = [
  {
    path: 'drone',
    component: DroneComponent
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
export class DroneRoutingModule { }
