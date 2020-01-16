import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-ticket-type',
  templateUrl: './ticket-type.component.html',
  styleUrls: ['./ticket-type.component.css']
})
export class TicketTypeComponent implements OnInit {

  type: number;
  reservation: number;
  constructor(private router: Router) {
    console.log(localStorage.getItem('token'))
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }
    this.type = 0; 
    this.reservation = 11; 
  }
  
  ngDoCheck() {

    console.log(this.type)
    console.log(this.reservation)
 
}

  ngOnInit() {
    
  }

  changeopt(value) {
    this.reservation = value;
  }

  redirection(){
    this.router.navigate(['matchTickets']);
  }

}
