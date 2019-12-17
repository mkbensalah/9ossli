import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TicketTypeComponent } from './components/ticket-type/ticket-type.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { FormsModule} from '@angular/forms';
import { MatchTicketsComponent } from './components/match-tickets/match-tickets.component'


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TicketTypeComponent,
    MainComponentComponent,
    MatchTicketsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
