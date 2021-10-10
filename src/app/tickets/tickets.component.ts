import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { fetchTickets } from './api/ticket.api.actions';
import { selectAllTickets } from './entity/ticket.entity.reducer';
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.scss']
})
export class TicketsComponent implements OnInit {
  tickets$: Observable<Ticket[]> = this.store.pipe(
    select(selectAllTickets)
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(fetchTickets());
  }

}
