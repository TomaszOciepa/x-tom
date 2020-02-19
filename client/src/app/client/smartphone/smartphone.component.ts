import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from './smartphone.service';
import { SmartphoneList } from '../model/smartphoneList';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'smartphone',
  templateUrl: './smartphone.component.html',
  styleUrls: ['./smartphone.component.css']
})
export class SmartphoneComponent implements OnInit {

  smartphoneList: SmartphoneList


  getAllSmartphone(){
    return this.http.getAll().subscribe(response =>{
      this.smartphoneList = response;
    })
  }

  constructor(private http:SmartphoneService,protected auth:AuthService) {
    this.auth.state.subscribe()
   }
  

  ngOnInit() {
    this.getAllSmartphone();
  }

}
