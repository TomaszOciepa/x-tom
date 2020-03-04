import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { AlbumsService } from '../albums.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {


  album_id = this.route.paramMap.pipe(
    map(parmas => +parmas.get('id'))
  )

  album = this.album_id.pipe(
    switchMap(id => this.http.getById(id))
  )

  constructor(private route:ActivatedRoute, private http:AlbumsService) { }

  ngOnInit() {
  }

}
