import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from '../smartphone.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-smartphone-by-id',
  templateUrl: './smartphone-by-id.component.html',
  styleUrls: ['./smartphone-by-id.component.css']
})
export class SmartphoneByIdComponent implements OnInit {

  constructor(private http:SmartphoneService, protected auth:AuthService, private route:ActivatedRoute) {
    this.auth.state.subscribe()

    if(this.auth.isAuthenticated){
      this.auth.checkRole.subscribe()
    }
  }

  smartphone = this.route.paramMap.pipe(
    map(params => +params.get('smartphone_id')),
    switchMap(id => this.http.getById(id))
  )

  ngOnInit(){}

}
