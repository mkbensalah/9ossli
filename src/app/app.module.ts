import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './common/nav-bar/nav-bar.component';
import { TicketTypeComponent } from './components/ticket-type/ticket-type.component';
import { MainComponentComponent } from './components/main-component/main-component.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    TicketTypeComponent,
    MainComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
