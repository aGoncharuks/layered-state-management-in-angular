import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { TicketApiEffects } from './ticket.api.effects';

describe('TicketEffects', () => {
  let actions$: Observable<any>;
  let effects: TicketApiEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        TicketApiEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(TicketApiEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
