import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AdminProductComponent } from './admin-product/admin-product.component';

const routes: Routes = [
  {
    path: 'panel-administracyjny',
    component: AdminComponent
  },
  {
    path: 'panel-administracyjny-produkty',
    component: AdminProductComponent
  },
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})


export class AdminRoutingModule { }
