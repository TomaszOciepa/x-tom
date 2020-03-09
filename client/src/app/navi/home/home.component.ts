import { Component, OnInit } from '@angular/core';
import { DroneService } from 'src/app/client/drone/drone.service';
import { DroneList } from 'src/app/client/model/droneList';
import { LaptopList } from 'src/app/client/model/laptopList';
import { SmartphoneList } from 'src/app/client/model/smartphoneList';
import { LaptopService } from 'src/app/client/laptop/laptop.service';
import { SmartphoneService } from 'src/app/client/smartphone/smartphone.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private droneService:DroneService, private laptopService:LaptopService, private smartphoneService:SmartphoneService) { }

  dronesRecomend:DroneList
  dronesPromotion:DroneList
  laptopsPromotion:LaptopList
  laptopsRecomend:LaptopList
  smartphonesPromotion:SmartphoneList
  smartphonesRecomend:SmartphoneList
  

  ngOnInit() {

    this.droneService.getByStatus('polecamy').subscribe(response =>{
     this.dronesRecomend = response
    })

    this.droneService.getByStatus('promocja').subscribe(response =>{
      this.dronesPromotion = response
     })
     
     this.laptopService.getByStatus('polecamy').subscribe(response =>{
      this.laptopsRecomend = response
     })

     this.laptopService.getByStatus('promocja').subscribe(response =>{
      this.laptopsPromotion = response
     })

     this.smartphoneService.getByStatus('polecamy').subscribe(response =>{
      this.smartphonesRecomend = response
     })

     this.smartphoneService.getByStatus('promocja').subscribe(response =>{
      this.smartphonesPromotion = response
     })
  }

}
