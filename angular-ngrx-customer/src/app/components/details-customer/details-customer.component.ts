import { Component, OnInit, Input } from '@angular/core';
import { Customer } from 'src/app/models/customer';
import { AppState } from 'src/app/store/states/app.state';
import { Store } from '@ngrx/store';
import { DeleteCustomerAction } from 'src/app/store/actions/customer.actions';

@Component({
  selector: 'app-details-customer',
  templateUrl: './details-customer.component.html',
  styleUrls: ['./details-customer.component.css']
})
export class DetailsCustomerComponent implements OnInit {

  @Input() customer: Customer;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  removeCustomer(id) {
    this.store.dispatch(new DeleteCustomerAction(id));
  }
}
