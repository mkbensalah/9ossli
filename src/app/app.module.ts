import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TicketTypeComponent } from './components/ticket-type/ticket-type.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { FormsModule} from '@angular/forms';
import { MatchTicketsComponent } from './components/match-tickets/match-tickets.component';
import { CardComponent } from './components/card/card.component';
import { CardsCollectionComponent } from './components/cards-collection/cards-collection.component'
import {MatCardModule} from '@angular/material';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PaymentComponent } from './components/payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TicketTypeComponent,
    MainComponentComponent,
    MatchTicketsComponent,
    CardComponent,
    CardsCollectionComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
