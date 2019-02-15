import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { IAppState } from '../state/app.state';
import { GetUsersSuccessAction, EUserActions, GetUserSuccessAction, GetUserAction, GetUsersAction} from '../actions/user.actions';
import { UserService } from '../../services/user.service';
import { IUserHttp } from '../../models/http-models/user-http.interface';
import { selectUserList } from '../selectors/user.selectors';

@Injectable()
export class UserEffects {

    @Effect()
    getUser$ = this.actions$.pipe(
        ofType<GetUserAction>(EUserActions.GetUser),
        map(action => action.payload),
        withLatestFrom(this.store$.pipe(select(selectUserList))),
        switchMap(([id, users]) => {
            const selectedUser = users.filter(user => user.id === +id)[0];
            return of(new GetUserSuccessAction(selectedUser));
        })
    );

    @Effect()
    getUsers$ = this.actions$.pipe(
        ofType<GetUsersAction>(EUserActions.GetUsers),
        switchMap(() => this.userService$.getUsers()),
        switchMap((userHttp: IUserHttp) => of(new GetUsersSuccessAction(userHttp.users)))
    );

    constructor(
        private userService$: UserService,
        private actions$: Actions,
        private store$: Store<IAppState>
    ) {}
}

