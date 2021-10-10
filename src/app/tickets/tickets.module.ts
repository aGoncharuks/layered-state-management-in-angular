import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { StoreModule } from '@ngrx/store';
import * as fromTicket from './entity/ticket.reducer';


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    StoreModule.forFeature(fromTicket.ticketsFeatureKey, fromTicket.reducer)
  ]
})
export class TicketsModule { }
