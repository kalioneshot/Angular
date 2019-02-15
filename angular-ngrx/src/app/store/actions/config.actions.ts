import { Action } from '@ngrx/store';
import { IConfig } from 'src/app/models/config.interface';

export enum EConfigActions {
    GetConfig = '[Config] Get Config',
    GetConfigSuccess = '[Config] Get Config Success'
}

export class GetConfigAction implements Action {
    public readonly type = EConfigActions.GetConfig;
}

export class GetConfigSuccessAction implements Action {
    public readonly type = EConfigActions.GetConfigSuccess;
    constructor(public payload: IConfig) {}
}

export type ConfigActions = GetConfigAction | GetConfigSuccessAction;

