import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import {  GetCustomerAction,
          CustomerActionEnum,
          GetCustomerSuccessAction,
          GetCustomersAction,
          GetCustomersSuccessAction,
          CreateCustomerAction,
          CreateCustomerSuccessAction} from '../actions/customer.actions';
import { AppState } from '../states/app.state';
import { customersSelector } from '../selectors/customer.selectors';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';

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
  getUsers$: Observable<Action> = this.actions$.pipe(
      ofType<GetCustomersAction>(CustomerActionEnum.GET_CUSTOMERS),
      switchMap(() =>
        // Call the service.
        this.customerService$.getCustomers()),
        switchMap((customers: Customer[]) => of(new GetCustomersSuccessAction(customers))),
  );


      // Effect allowing to get a article by ID that will accept dispatched action of the type 'GET_BY_ID'
      @Effect()
      searchArticleById$: Observable<Action> = this.actions$.pipe(
          ofType<GetByIdAction>(ArticleActionsTypes.GET_BY_ID),
          // Rate limiter to call HTTP service.
          debounceTime(500),
          map(action => action.payload),
          switchMap(id =>
              this.articleService.getArticleById(id)
              .map(res => new GetByIdSuccessAction(res))
          )
      );

  @Effect()
  createUser$ = this.actions$.pipe(
      ofType<CreateCustomerAction>(CustomerActionEnum.CREATE_CUSTOMER),
      switchMap((action) => {
        this.customerService$.createCustomer(action.payload)
      }
  );

  constructor(
      private customerService$: CustomerService,
      private actions$: Actions,
      private store$: Store<AppState>
  ) {}
}
