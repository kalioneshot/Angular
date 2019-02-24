import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { Customer } from 'src/app/models/customer';
import { customersSelector } from 'src/app/store/selectors/customer.selectors';
import { GetCustomersAction } from 'src/app/store/actions/customer.actions';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {

  customers$ = this.store.pipe(select(customersSelector));

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new GetCustomersAction());
  }

}
