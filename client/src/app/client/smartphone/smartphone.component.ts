import { Component, OnInit } from '@angular/core';
import { SmartphoneService } from './smartphone.service';
import { SmartphoneList } from '../model/smartphoneList';

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

  constructor(private http:SmartphoneService) { }

  ngOnInit() {
    this.getAllSmartphone();
  }

}
