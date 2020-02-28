import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneComponent } from './drone.component';
import { DroneByIdComponent } from './drone-by-id/drone-by-id.component';

const routes: Routes = [
  {
    path: 'drones',
    component: DroneComponent
  },
  {
    path: 'drone/:drone_id',
    component: DroneByIdComponent
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class DroneRoutingModule { 
  
}
