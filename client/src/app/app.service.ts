import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  urlAuth = "http://ec2-18-197-120-182.eu-central-1.compute.amazonaws.com:8090"
  urlApi = "http://ec2-18-197-120-182.eu-central-1.compute.amazonaws.com:8080"

  // urlAuth = "http://localhost:8090"
  // urlApi = "http://localhost:8080"


}
