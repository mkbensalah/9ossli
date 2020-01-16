import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchServicesService } from '../../service/match-services.service'
import { MatchModule } from '../../modal/match/match.module'
import { Router } from '@angular/router';


@Component({
  selector: 'app-match-tickets',
  templateUrl: './match-tickets.component.html',
  styleUrls: ['./match-tickets.component.css']
})
export class MatchTicketsComponent implements OnInit {
  show : boolean;
  matches: MatchModule [];
  match: MatchModule ;
  
  constructor( private matchService: MatchServicesService, private router:Router) {
    console.log(localStorage.getItem('token'))
    if(!localStorage.getItem('token')){
      this.router.navigate(['/login'])
    }


    this.show = false;
    
    }

  ngOnInit() {
    
    this.matchService.getMatchs().subscribe( 
      (matches) => {
        
        this.matches = matches;
        
      },
      (error) => {
        alert('error')
      },
      () => {
        console.log(this.matches); 
      },
      
    );
  }


  getMatchById(id = '') : MatchModule{
    this.matchService.getMatchById(id).subscribe( 
      (matches) => {
        
        this.match = matches;
        
      },
      (error) => {
        alert('error')
      },
      () => {
        
      },
      
    );
    return this.match
  }


  myFunction() {
    this.show = !this.show;
    console.log(this.show)
  }

}
