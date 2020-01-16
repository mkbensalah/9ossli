import { Component, OnInit } from '@angular/core';
import { AuthentificatServiceService} from '../../service/authentificat-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor( private authentificatService: AuthentificatServiceService, private router: Router ) { 
    if(localStorage.getItem('token')){
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
  }

  login(credentials){
    this.authentificatService.login(credentials).subscribe(
      (response :any) => {
        const token = response.id;
        localStorage.setItem('token', token);
        localStorage.setItem('username', credentials['username']);
        
        
        if(token){
          this.router.navigate(['/TicketType']);
        }
      }
    );
    
  }

}
