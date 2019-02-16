import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import {  GetCustomerAction,
          CustomerActionEnum,
          GetCustomerSuccessAction,
          GetCustomersAction,
          GetCustomersSuccessAction } from '../actions/customer.actions';
import { Customer } from 'src/app/models/customer';
import { AppState } from '../states/app.state';
import { customersSelector } from '../selectors/customer.selectors';
import { CustomerService } from 'src/app/services/customer.service';

@Injectable()
export class CustomerEffects {

  @Effect()
  getUser$ = this.actions$.pipe(
      ofType<GetCustomerAction>(CustomerActionEnum.GET_CUSTOMER),
      map(action => action.payload),
      withLatestFrom(this.store$.pipe(select(customersSelector))),
      switchMap(([id, customers]) => {
          const selectedUser = customers.filter(customer => (customer.id).match(id))[0];
          return of(new GetCustomerSuccessAction(selectedUser));
      })

  );

  @Effect()
  getUsers$ = this.actions$.pipe(
      ofType<GetCustomersAction>(CustomerActionEnum.GET_CUSTOMERS),
      switchMap(() => this.customerService$.getCustomers()),
      switchMap((customers: Customer[]) => of(new GetCustomersSuccessAction(customers)))
  );

  constructor(
      private customerService$: CustomerService,
      private actions$: Actions,
      private store$: Store<AppState>
  ) {}
}
