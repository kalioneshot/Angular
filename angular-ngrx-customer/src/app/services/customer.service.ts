import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Customer } from '../models/customer';

@Injectable()
export class CustomerService {

  usersUrl = `${environment.apiUrl}customers.json`;

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.usersUrl);
  }

}
