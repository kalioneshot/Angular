import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/states/app.state';
import { CreateCustomerAction, GetCustomersAction } from 'src/app/store/actions/customer.actions';
import { NgForm, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  model: any = {};

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  onSubmit() {
    const customer = new Customer(this.model.id, this.model.name, this.model.age);

    // Dispatch the create customer action
    this.store.dispatch(new CreateCustomerAction(customer));
  }

}
