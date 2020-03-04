import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumComponent } from './album/album.component';
import { ListComponent } from './list/list.component';
import { AuthorizedGuard } from '../auth/authorized.guard';


const routes: Routes = [
  {
    path: 'albums',
    canActivateChild:[
      AuthorizedGuard
    ],
    children:[
      {
        path: '',
        component: AlbumsComponent,
        children:[
          {
            path:'',
            component: ListComponent,
            outlet:'list'
          }
        ]
      },
      {
        path: ':id',
        component: AlbumsComponent,
        children:[
          {
            path: '',
            component: ListComponent,
            outlet: 'list'
          },
          {
            path: '',
            component: AlbumComponent
          },
        ]
      }
    ]

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }
