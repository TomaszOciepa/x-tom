import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminProductComponent } from './admin-product/admin-product.component';


@NgModule({
  declarations: [AdminComponent, AdminProductComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
