import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './laptop.component';
import { LaptopByIdComponent } from './laptop-by-id/laptop-by-id.component';
import { AddLaptopComponent } from './add-laptop/add-laptop.component';
import { DeleteLaptopComponent } from './delete-laptop/delete-laptop.component';
import { EditLaptopComponent } from './edit-laptop/edit-laptop.component';

const routes: Routes = [
  {
    path: 'laptops',
    component: LaptopComponent
  },
  {
    path: 'add-laptop',
    component: AddLaptopComponent
  },
  {
    path: 'laptop/:laptop_id',
    component: LaptopByIdComponent
  },
  {
    path: 'edit-laptop/:laptop_id',
    component: EditLaptopComponent
  },
  {
    path: 'delete-laptop/:laptop_id',
    component: DeleteLaptopComponent
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
export class LaptopRoutingModule { }
