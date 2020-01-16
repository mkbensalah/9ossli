import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-match-tickets',
  templateUrl: './match-tickets.component.html',
  styleUrls: ['./match-tickets.component.css']
})
export class MatchTicketsComponent implements OnInit {
  show : boolean
  
  constructor() {
    this.show = false;
    
   }

  ngOnInit() {
  }
  myFunction() {
    
    this.show = !this.show;
    console.log(this.show)
  }

}
