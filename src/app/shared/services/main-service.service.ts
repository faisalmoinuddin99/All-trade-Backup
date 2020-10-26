import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainServiceService {

  response: any;

  constructor(private http:HttpClient) { }
  
  GetTopCrops() {
    console.log("Calling GetTopCrops API")
    return this.http.get(`${baseURL}/Crop/GetTopCrops`);
  }

  GetTopAreaSown() {
    console.log("Calling GetTopAreaSown API")
    return this.http.get(`${baseURL}/district/GetTopAreaSown`);
  }

  GetTopFarmers() {
    console.log("Calling GetTopFarmers API")
    return this.http.get(`${baseURL}/district/GetTopFarmers`);
  }
}
