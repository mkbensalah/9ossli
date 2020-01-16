import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {
  url = "http://localhost:3000/api/Users"
  constructor( private http: HttpClient ) { }

  register( credentials ){
    console.log(credentials)
    return this.http.post(this.url, credentials);
  }

}
