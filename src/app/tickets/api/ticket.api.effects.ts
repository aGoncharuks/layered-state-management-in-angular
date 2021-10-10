import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { loadTickets } from '../entity/ticket.entity.actions';
import { Ticket } from '../ticket.model';
import { fetchTicketsError } from './ticket.api.actions';

@Injectable()
export class TicketApiEffects {

  constructor(private actions$: Actions,
              private http: HttpClient) {}

  fetchTickets$ = createEffect(
    () => this.actions$.pipe(
      ofType('[Ticket/API] Fetch Tickets'),
      switchMap(() => this.http.get<Ticket[]>(`${environment.apiUrl}/api/data`)),
      switchMap(tickets => of(loadTickets({tickets}))),
      catchError(() => of(fetchTicketsError()))
    )
  );

}
