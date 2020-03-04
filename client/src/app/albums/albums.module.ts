import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { ListComponent } from './list/list.component';
import { AlbumComponent } from './album/album.component';


@NgModule({
  declarations: [AlbumsComponent, ListComponent, AlbumComponent],
  imports: [
    CommonModule,
    AlbumsRoutingModule
  ],
  exports:[
    AlbumsComponent
  ]
})
export class AlbumsModule { }
