import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { AdminRoutingModule } from './admin.routing.module';
import { AdminProductComponent } from './admin-product/admin-product.component';
import { ErrorModule } from '../error/error.module';


@NgModule({
  declarations: [AdminComponent, AdminProductComponent],
  imports: [
    CommonModule,
    ErrorModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
