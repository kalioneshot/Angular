import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Customer } from '../models/customer';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class CustomerService {

  usersUrl = `${environment.apiUrl}customers.json`;

  customers$: Observable<Customer[]>;

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    this.customers$ = this.http.get<Customer[]>(this.usersUrl).pipe(
      tap((customers: Customer[]) => {
        // Exemple - local storage code can go here
      })
    );
    return this.customers$;
  }

  // Add a customer from the initial list.
  createCustomer(customer: Customer) {
    this.customers$.pipe(map(customersList => {
      customersList.push(customer);
    }));
  }

}
