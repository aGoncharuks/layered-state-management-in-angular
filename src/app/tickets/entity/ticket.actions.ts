import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';

import { Ticket } from './ticket.model';

export const loadTickets = createAction(
  '[Ticket/API] Load Tickets', 
  props<{ tickets: Ticket[] }>()
);

export const addTicket = createAction(
  '[Ticket/API] Add Ticket',
  props<{ ticket: Ticket }>()
);

export const upsertTicket = createAction(
  '[Ticket/API] Upsert Ticket',
  props<{ ticket: Ticket }>()
);

export const addTickets = createAction(
  '[Ticket/API] Add Tickets',
  props<{ tickets: Ticket[] }>()
);

export const upsertTickets = createAction(
  '[Ticket/API] Upsert Tickets',
  props<{ tickets: Ticket[] }>()
);

export const updateTicket = createAction(
  '[Ticket/API] Update Ticket',
  props<{ ticket: Update<Ticket> }>()
);

export const updateTickets = createAction(
  '[Ticket/API] Update Tickets',
  props<{ tickets: Update<Ticket>[] }>()
);

export const deleteTicket = createAction(
  '[Ticket/API] Delete Ticket',
  props<{ id: string }>()
);

export const deleteTickets = createAction(
  '[Ticket/API] Delete Tickets',
  props<{ ids: string[] }>()
);

export const clearTickets = createAction(
  '[Ticket/API] Clear Tickets'
);
