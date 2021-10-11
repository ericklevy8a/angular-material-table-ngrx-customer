import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import {
  CustomerActionType,
  CustomerLoadAction,
  CustomerLoadSuccessAction,
  CustomerLoadFailureAction,
} from '../actions/customer.actions';

@Injectable()
export class CustomerEffects {
  constructor(private service: CustomerService, private actions$: Actions) {}
  @Effect()
  public loadCustomer$ = this.actions$.pipe(
    ofType<CustomerLoadAction>(CustomerActionType.Loading),
    map((action) => action.payload),
    switchMap((params: CustomerParams) =>
      this.service.getCustomer(params).pipe(
        map(
          (response: CustomerResponse) =>
            new CustomerLoadSuccessAction(response)
        ),
        catchError((error) => of(new CustomerLoadFailureAction(error)))
      )
    )
  );
}
