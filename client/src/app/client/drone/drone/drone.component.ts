import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DroneService } from '../drone.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Drone } from '../../model/drone';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.css']
})
export class DroneComponent implements OnInit {

  
  constructor(private http:DroneService, private route:ActivatedRoute) {}

  product:Drone


   drone = this.route.paramMap.pipe(
    map(params => +params.get('drone_id')),
    switchMap(id => this.http.getById(id),)
  )
  
  addtoCart(product){
    this.product = product
    console.log("właśnie dodałem: "+this.product.drone_mark)
  }
  
  ngOnInit() {}

}
