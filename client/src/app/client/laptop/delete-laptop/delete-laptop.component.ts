import { Component, OnInit } from '@angular/core';
import { LaptopService } from '../laptop.service';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-delete-laptop',
  templateUrl: './delete-laptop.component.html',
  styleUrls: ['./delete-laptop.component.css']
})
export class DeleteLaptopComponent implements OnInit {

  constructor(private http:LaptopService, protected auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()
    
    if(this.auth.isAuthenticated){
      this.auth.checkRole.subscribe()
    }

    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('laptop_id')
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
