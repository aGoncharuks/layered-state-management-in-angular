import { createAction } from '@ngrx/store';

export const fetchTickets = createAction(
  '[Ticket/API] Fetch Tickets'
);

export const fetchTicketsError = createAction(
  '[Ticket/API] Fetch Tickets Error'
);
