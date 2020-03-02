import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { DroneService } from '../drone.service';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-delete-drone',
  templateUrl: './delete-drone.component.html',
  styleUrls: ['./delete-drone.component.css']
})
export class DeleteDroneComponent implements OnInit {

  constructor(private http:DroneService, protected auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()
    
    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('drone_id')
    })
  }

  id:number
  error: boolean;

  remove:boolean = false

  delete(){
      this.http.delete(this.id).subscribe(()=>{
        console.log("Success")
      },err=>{
        this.error = err.message
      })

      this.remove = true
  }

  ngOnInit() {


  }

}
