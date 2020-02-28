import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LaptopComponent } from './laptop.component';
import { LaptopByIdComponent } from './laptop-by-id/laptop-by-id.component';

const routes: Routes = [
  {
    path: 'laptops',
    component: LaptopComponent
  },
  {
    path: 'laptop/:laptop_id',
    component: LaptopByIdComponent
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
