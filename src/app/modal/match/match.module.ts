import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class MatchModule {
  id: string;
  type: string;
  category: string;
  team: string;
  team1: string;
  date: Date;
  stadium: string;
  nbrPlace: number;
  nbrDis: number;
  nbrRes: number;
  constructor(id, type = '', category = '', team = '', team1 = '', date, stadium = '', nbrPlace =0, nbrDis = 0, nbrRes = 0){
    this.id = id;
    this.type = type;
    this.category = category;
    this.team = team;
    this.team1 = team1;
    this.date = date;
    this.stadium = stadium;
    this.nbrPlace = nbrPlace;
    this.nbrDis = nbrDis;
    this.nbrRes = nbrRes;
  }
 }
