import { Component, OnInit } from '@angular/core';
import { AuthentificatServiceService } from 'src/app/service/authentificat-service.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
/*cr ={
  
  "username": "kdsd",
  "email": "sdsd@gmail.com",
 
  "password": "sqq"
}*/
  constructor( private authentificatService: AuthentificatServiceService ) { }

  /*login(credentials){
    this.authentificatService.login(credentials).subscribe(
      (response) => {
        const token = response.id;
        localStorage.setItem('token', token);
        console.log(response)
      }
    );
  }*/

  ngOnInit() {
     
    //this.login( this.cr);
  }

}
