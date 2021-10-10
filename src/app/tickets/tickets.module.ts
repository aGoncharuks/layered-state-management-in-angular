import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TicketsRoutingModule } from './tickets-routing.module';
import { TicketsComponent } from './tickets.component';
import { StoreModule } from '@ngrx/store';
import * as fromTicket from './entity/ticket.entity.reducer';
import { EffectsModule } from '@ngrx/effects';
import { TicketApiEffects } from './api/ticket.api.effects';


@NgModule({
  declarations: [
    TicketsComponent
  ],
  imports: [
    CommonModule,
    TicketsRoutingModule,
    StoreModule.forFeature(fromTicket.ticketsFeatureKey, fromTicket.reducer),
    EffectsModule.forFeature([TicketApiEffects]),
    HttpClientModule
  ]
})
export class TicketsModule { }
