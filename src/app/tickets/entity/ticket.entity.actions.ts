import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Ticket } from '../ticket.model';


export const loadTickets = createAction(
  '[Ticket/Entity] Load Tickets',
  props<{ tickets: Ticket[] }>()
);

export const addTicket = createAction(
  '[Ticket/Entity] Add Ticket',
  props<{ ticket: Ticket }>()
);

export const upsertTicket = createAction(
  '[Ticket/Entity] Upsert Ticket',
  props<{ ticket: Ticket }>()
);

export const addTickets = createAction(
  '[Ticket/Entity] Add Tickets',
  props<{ tickets: Ticket[] }>()
);

export const upsertTickets = createAction(
  '[Ticket/Entity] Upsert Tickets',
  props<{ tickets: Ticket[] }>()
);

export const updateTicket = createAction(
  '[Ticket/Entity] Update Ticket',
  props<{ ticket: Update<Ticket> }>()
);

export const updateTickets = createAction(
  '[Ticket/Entity] Update Tickets',
  props<{ tickets: Update<Ticket>[] }>()
);

export const deleteTicket = createAction(
  '[Ticket/Entity] Delete Ticket',
  props<{ id: string }>()
);

export const deleteTickets = createAction(
  '[Ticket/Entity] Delete Tickets',
  props<{ ids: string[] }>()
);

export const clearTickets = createAction(
  '[Ticket/Entity] Clear Tickets'
);
