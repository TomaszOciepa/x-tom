import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DronesComponent } from './drones.component';
import { DroneByIdComponent } from './drone-by-id/drone-by-id.component';
import { DeleteDroneComponent } from './delete-drone/delete-drone.component';
import { AddDroneComponent } from './add-drone/add-drone.component';
import { EditDroneComponent } from './edit-drone/edit-drone.component';
import { AuthorizedGuard } from 'src/app/auth/authorized.guard';
import { DroneComponent } from './drone/drone.component';


const routes: Routes = [
  {
    path: 'drones',
    component: DronesComponent
  },
  {
    path: 'drone/:drone_id',
    component: DroneComponent
  },
  {
    path: 'add-drone',
    component: AddDroneComponent,
    canActivate:[
      AuthorizedGuard
    ]
  },
  {
    path: 'droneById/:drone_id',
    component: DroneByIdComponent
  },
  {
    path: 'edit-drone/:drone_id',
    component: EditDroneComponent
  },
  {
    path: 'delete-drone/:drone_id',
    component: DeleteDroneComponent
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
