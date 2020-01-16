import { Component, OnInit } from '@angular/core';
import { Card } from '../../classes/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  private cards: Card[];
  
  constructor() { 
    this.cards = [
      new Card(1, 'Ligue1', 'Espérance Sportive de Tunis', 'Club Africain', 'Stade Olympique de Radès (Tunis, Tunisia)', '08/08/2020 14:30', 
      '../../../assets/img/tunisia.png', '../../../assets/img/est-ca.png'),
      new Card(2, 'LigaSantander', 'FC Barcelona', 'Real Madrid', 'Camp Nou (Barcelona, Spain)', '18/02/2020 20:30', 
      '../../../assets/img/spain.png', '../../../assets/img/bar-rma.png')
    ]
  }

  ngOnInit() {
  }

}
