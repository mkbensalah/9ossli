import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MainComponentComponent} from '../app/components/main-component/main-component.component';
import {TicketTypeComponent} from '../app/components/ticket-type/ticket-type.component';

const routes: Routes = [
  {path: '', component: MainComponentComponent},
  {path: 'TicketType', component: TicketTypeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
