import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthentificatServiceService {
url = "http://localhost:3000/api/Users/login"
  constructor( private http: HttpClient ) { }

  login( credentials ){
    console.log(credentials)
    return this.http.post(this.url, credentials);
  }
}
