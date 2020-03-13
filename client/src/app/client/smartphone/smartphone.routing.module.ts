import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SmartphoneComponent } from './smartphone.component';
import { SmartphoneByIdComponent } from './smartphone-by-id/smartphone-by-id.component';
import { AddSmartphoneComponent } from './add-smartphone/add-smartphone.component';
import { DeleteSmartphoneComponent } from './delete-smartphone/delete-smartphone.component';
import { EditSmartphoneComponent } from './edit-smartphone/edit-smartphone.component';

const routes: Routes = [
  // {
  //   path: 'smartphones',
  //   component: SmartphoneComponent
  // },
  // {
  //   path: 'add-smartphone',
  //   component: AddSmartphoneComponent
  // },
  // {
  //   path: 'smartphone/:smartphone_id',
  //   component: SmartphoneByIdComponent
  // },
  // {
  //   path: 'edit-smartphone/:smartphone_id',
  //   component: EditSmartphoneComponent
  // },
  // {
  //   path: 'delete-smartphone/:smartphone_id',
  //   component: DeleteSmartphoneComponent
  // }

]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ],
})
export class SmartphoneRoutingModule { }
