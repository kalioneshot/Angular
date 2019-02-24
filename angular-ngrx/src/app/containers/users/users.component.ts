
import { GetUsersAction } from './../../store/actions/user.action';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { AppState } from '../../store/states/app.state';
import { userListSelector } from '../../store/selectors/user.selector';
import { Router } from '@angular/router';

@Component({
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersContainerComponent implements OnInit {
  users$ = this.store.pipe(select(userListSelector));

  constructor(private store: Store<AppState>, private router: Router) {}

  ngOnInit() {
    this.store.dispatch(new GetUsersAction());
  }

  navigateToUser(id: number) {
    this.router.navigate(['user', id]);
  }
}
