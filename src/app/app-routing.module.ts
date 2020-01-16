import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponentComponent} from '../app/components/main-component/main-component.component';
import {TicketTypeComponent} from '../app/components/ticket-type/ticket-type.component';
import { MatchTicketsComponent } from '../app/components/match-tickets/match-tickets.component'
import { LoginComponent } from '../app/components/login/login.component'
import { RegisterComponent } from '../app/components/register/register.component'

const routes: Routes = [
  {path: '', component: MainComponentComponent},
  {path: 'TicketType', component: TicketTypeComponent},
  {path: 'matchTickets', component: MatchTicketsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
