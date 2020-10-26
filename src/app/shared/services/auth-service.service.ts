import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  response: any;

  constructor(private http:HttpClient) { }
  
  login(data):Observable<any>{
    console.log("Calling API")
    return this.http.post(`${baseURL}/Auth/token`,data)
  }
}
