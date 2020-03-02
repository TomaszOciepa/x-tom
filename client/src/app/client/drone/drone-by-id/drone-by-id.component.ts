import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DroneService } from '../drone.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'drone-by-id',
  templateUrl: './drone-by-id.component.html',
  styleUrls: ['./drone-by-id.component.css']
})
export class DroneByIdComponent implements OnInit {

  constructor(private http:DroneService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()
   }

   drone = this.route.paramMap.pipe(
    map(params => +params.get('drone_id')),
    switchMap(id => this.http.getById(id))
  )
   id:number
  
   deleteDrone(id: number){
     console.log("Usuwm drona HAHAHA "+id)
   }
  ngOnInit(){}

}
