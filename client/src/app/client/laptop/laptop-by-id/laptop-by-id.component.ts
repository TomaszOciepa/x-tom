import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { LaptopService } from '../laptop.service';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'laptop-by-id',
  templateUrl: './laptop-by-id.component.html',
  styleUrls: ['./laptop-by-id.component.css']
})
export class LaptopByIdComponent implements OnInit {

  constructor(private http:LaptopService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()
   }

   laptop = this.route.paramMap.pipe(
     map(params => +params.get('laptop_id')),
     switchMap(id => this.http.getById(id))
   )

  ngOnInit(){
  }

}
