import { Component, OnInit } from '@angular/core';
import { RegisterServiceService } from '../../service/register-service.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private registerService: RegisterServiceService, private router: Router ) { }

  ngOnInit() {
  }
  register(credentials){
    this.registerService.register(credentials).subscribe(
      (response) => {
        if(response){
          this.router.navigate(['/login']);
        }
      }
    )
  }

}
