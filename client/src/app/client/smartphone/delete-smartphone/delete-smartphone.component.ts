import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ActivatedRoute } from '@angular/router';
import { SmartphoneService } from '../smartphone.service';

@Component({
  selector: 'app-delete-smartphone',
  templateUrl: './delete-smartphone.component.html',
  styleUrls: ['./delete-smartphone.component.css']
})
export class DeleteSmartphoneComponent implements OnInit {

  constructor(private http:SmartphoneService, protected auth:AuthService, private route:ActivatedRoute) { 
    this.auth.state.subscribe()
    
    this.route.paramMap.subscribe(params =>{
      this.id = +params.get('smartphone_id')
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
