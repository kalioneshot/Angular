import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select, Action } from '@ngrx/store';
import { of, Observable } from 'rxjs';
import { switchMap, map, withLatestFrom, tap } from 'rxjs/operators';
import { AppState } from '../states/app.state';
import { GetUsersSuccessAction, UserActionsEnum, GetUserSuccessAction, GetUserAction, GetUsersAction } from '../actions/user.action';
import { UserService } from '../../services/user.service';
import { userListSelector } from '../selectors/user.selector';
import { User } from 'src/app/models/user';

@Injectable()
export class UserEffect {

    @Effect()
    getUser$: Observable<Action>  = this.actions$.pipe(
        ofType<GetUserAction>(UserActionsEnum.GetUser),
        // Get the id number.
        map(action => action.payload),
        tap(val => console.log(`BEFORE MAP: ${val}`)),
        withLatestFrom(this.store$.pipe(select(userListSelector))),
        tap(val => console.log(`WHILE MAP: ${val}`)),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === id)[0];
            return of(new GetUserSuccessAction(selectedUser));
        }),
        tap(val => console.log(`AFTER MAP: ${val}`)),
    );

    @Effect()
    getUsers$: Observable<Action> = this.actions$.pipe(
        ofType<GetUsersAction>(UserActionsEnum.GetUsers),
        switchMap(() => this.userService$.getUsers()),
        switchMap((users: User[]) => of(new GetUsersSuccessAction(users)))
    );

    constructor(
        private userService$: UserService,
        private actions$: Actions,
        private store$: Store<AppState>
    ) { }
}

