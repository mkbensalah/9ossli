import { Component, OnInit } from '@angular/core';
import { AuthentificatServiceService} from '../../service/authentificat-service.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authentificatService: AuthentificatServiceService ) { }

  ngOnInit() {
  }

  login(credentials){
    this.authentificatService.login(credentials).subscribe(
      (response) => {
        const token = response.id;
        localStorage.setItem('token', token);
      }
    );
  }

}
