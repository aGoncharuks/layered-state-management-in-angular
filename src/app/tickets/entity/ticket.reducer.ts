import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Ticket } from './ticket.model';
import * as TicketActions from './ticket.actions';

export const ticketsFeatureKey = 'tickets';

export interface State extends EntityState<Ticket> {
  // additional entities state properties
}

export const adapter: EntityAdapter<Ticket> = createEntityAdapter<Ticket>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});


export const reducer = createReducer(
  initialState,
  on(TicketActions.addTicket,
    (state, action) => adapter.addOne(action.ticket, state)
  ),
  on(TicketActions.upsertTicket,
    (state, action) => adapter.upsertOne(action.ticket, state)
  ),
  on(TicketActions.addTickets,
    (state, action) => adapter.addMany(action.tickets, state)
  ),
  on(TicketActions.upsertTickets,
    (state, action) => adapter.upsertMany(action.tickets, state)
  ),
  on(TicketActions.updateTicket,
    (state, action) => adapter.updateOne(action.ticket, state)
  ),
  on(TicketActions.updateTickets,
    (state, action) => adapter.updateMany(action.tickets, state)
  ),
  on(TicketActions.deleteTicket,
    (state, action) => adapter.removeOne(action.id, state)
  ),
  on(TicketActions.deleteTickets,
    (state, action) => adapter.removeMany(action.ids, state)
  ),
  on(TicketActions.loadTickets,
    (state, action) => adapter.setAll(action.tickets, state)
  ),
  on(TicketActions.clearTickets,
    state => adapter.removeAll(state)
  ),
);


export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();
