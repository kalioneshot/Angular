import { Action } from '@ngrx/store';
import { IUser } from '../../models/user.interface';

// Enum containing the definition for the User actions types
export enum EUserActions {
    GetUsers= '[Users] Get Users',
    GetUsersSucess= '[Users] Get Users Sucess',
    GetUser= '[User] Get User',
    GetUserSucess= '[User] Get User Sucess'
}

export class GetUsersAction implements Action {
    public readonly type = EUserActions.GetUsers;
}

export class GetUsersSuccessAction implements Action {
    public readonly type = EUserActions.GetUsersSucess;
    // we set the type to one of the enums values and if you need a payload for the action you add it to the constructor of the class
    constructor(public payload: IUser[]) {}
}

export class GetUserAction implements Action {
    public readonly type = EUserActions.GetUser;
    constructor(public payload: number) {}
}

export class GetUserSuccessAction implements Action {
    public readonly type = EUserActions.GetUserSucess;
    constructor(public payload: IUser) {}
}

export type UserActions = GetUsersAction | GetUsersSuccessAction | GetUserAction | GetUserSuccessAction;
