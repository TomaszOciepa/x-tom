import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DroneComponent } from './drone.component';
<<<<<<< HEAD

const routes: Routes = [
  {
    path: 'drone',
    component: DroneComponent
=======
import { DroneByIdComponent } from './drone-by-id/drone-by-id.component';

const routes: Routes = [
  {
    path: 'drones',
    component: DroneComponent
  },
  {
    path: 'drone/:drone_id',
    component: DroneByIdComponent
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
})
export class DroneRoutingModule { }
=======
  ],
})
export class DroneRoutingModule { 
  
}
>>>>>>> routing
