import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportsServiceService {

  token : string;

  constructor(private _http: HttpClient) {
    this.token = sessionStorage.getItem("token")

   }
  

  GetCrops() {
    console.log(this.token);
    var header = {
      headers: new HttpHeaders()
        .set('Authorization',  `Bearer  ${this.token}`)
    }
    //return [];
    return this._http.get(`${baseURL}/NewCrop/GetExistingCrops`,header);
  }
}
