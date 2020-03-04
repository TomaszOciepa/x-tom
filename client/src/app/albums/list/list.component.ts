import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  albums = this.http.getAll();
  
  constructor(private http:AlbumsService, private route:ActivatedRoute) { 

  }

  ngOnInit() {

  }

}
