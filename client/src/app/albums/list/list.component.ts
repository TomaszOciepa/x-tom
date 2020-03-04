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
  
  selectedId:number
  

  constructor(private http:AlbumsService, private route:ActivatedRoute) { 

  }

  ngOnInit() {
    this.route.paramMap.pipe(
      map(params => params.get('id'))
    ).subscribe(id=>{
      this.selectedId = +id
    })
  }

}
