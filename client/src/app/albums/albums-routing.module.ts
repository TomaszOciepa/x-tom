import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';


const routes: Routes = [
  {
    path: 'albums',
    component: AlbumsComponent,

    children:[
      {
        path: '',
        component: AlbumComponent
      },
      {
        path: ':id',
        component: AlbumComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
