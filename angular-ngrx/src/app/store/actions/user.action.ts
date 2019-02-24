import { Action } from '@ngrx/store';
import { User } from '../../models/user';

// Enum containing the definition for the User actions types
export enum UserActionsEnum {
    GetUsers= '[Users] Get Users',
    GetUsersSucess= '[Users] Get Users Sucess',
    GetUser= '[User] Get User',
    GetUserSucess= '[User] Get User Sucess'
}

export class GetUsersAction implements Action {
    public readonly type = UserActionsEnum.GetUsers;
}

export class GetUsersSuccessAction implements Action {
    public readonly type = UserActionsEnum.GetUsersSucess;
    // we set the type to one of the enums values and if you need a payload for the action you add it to the constructor of the class
    constructor(public payload: User[]) {}
}

export class GetUserAction implements Action {
    public readonly type = UserActionsEnum.GetUser;
    constructor(public payload: string) {}
}

export class GetUserSuccessAction implements Action {
    public readonly type = UserActionsEnum.GetUserSucess;
    constructor(public payload: User) {}
}

export type UserActions = GetUsersAction | GetUsersSuccessAction | GetUserAction | GetUserSuccessAction;
