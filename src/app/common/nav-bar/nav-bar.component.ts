import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isConnected: Boolean ;
  username: String;
  constructor() { 
    
    }

  ngOnInit() {
  }

  ngDoCheck() {
    if(!localStorage.getItem('token')){
      this.isConnected = false
    }
    else { this.isConnected = true}
    this.username = localStorage.getItem('username')
    console.log(localStorage.getItem('username'))
 
}

}
