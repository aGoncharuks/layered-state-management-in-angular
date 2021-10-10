import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromTicket from '../tickets/entity/ticket.reducer';


export interface State {

  [fromTicket.ticketsFeatureKey]: fromTicket.State;
}

export const reducers: ActionReducerMap<State> = {

  [fromTicket.ticketsFeatureKey]: fromTicket.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
