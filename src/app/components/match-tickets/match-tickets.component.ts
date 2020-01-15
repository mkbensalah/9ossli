import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatchServicesService } from '../../service/match-services.service'
import { MatchModule } from '../../modal/match/match.module'

@Component({
  selector: 'app-match-tickets',
  templateUrl: './match-tickets.component.html',
  styleUrls: ['./match-tickets.component.css']
})
export class MatchTicketsComponent implements OnInit {
  show : boolean;
  matches: MatchModule [];
  match: MatchModule ;
  
  constructor( private matchService: MatchServicesService) {
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
