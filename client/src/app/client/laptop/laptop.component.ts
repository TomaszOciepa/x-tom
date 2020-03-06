import { Component, OnInit } from '@angular/core';
import { LaptopService } from './laptop.service';
import { LaptopList } from '../model/laptopList';
import { AuthService } from 'src/app/auth/auth.service';


@Component({
  selector: 'laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.css']
})
export class LaptopComponent implements OnInit {

  laptopList:LaptopList

  getAllLaptop(){
    this.http.getAll().subscribe(response =>{
      this.laptopList = response;
    })
  }

  constructor(private http:LaptopService, protected auth:AuthService) { 
    this.auth.state.subscribe()
  }
  

  ngOnInit() {

    this.getAllLaptop()
  }

}
