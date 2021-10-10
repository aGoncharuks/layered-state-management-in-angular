import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTicket from '../tickets/entity/ticket.entity.reducer';


export interface State {

  [fromTicket.ticketsFeatureKey]: fromTicket.TicketsEntityState;
}

export const reducers: ActionReducerMap<State> = {

  [fromTicket.ticketsFeatureKey]: fromTicket.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
