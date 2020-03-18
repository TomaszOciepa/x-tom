import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'koszyk',
    component: CartComponent
  },

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class CartRoutingModule { }
