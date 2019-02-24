import { Action } from '@ngrx/store';
import { Article } from 'src/app/models/article';

// Enumeration for actions types.
export enum ArticleActionsTypes {
    SHOW_ALL = '[ARTICLE] Show All',
    SHOW_ALL_SUCCESS = '[ARTICLE] Show All Success',
    CREATE = '[ARTICLE] Create',
    CREATE_SUCCESS = '[ARTICLE] Create Success',
    CREATE_FAILURE = '[ARTICLE] Create Failure',
    GET_BY_ID = '[ARTICLE] Get by Id',
    GET_BY_ID_SUCCESS = '[ARTICLE] Get by Id Success',
    RESET = '[ARTICLE] Reset',
}

export class ShowAllAction implements Action {
    readonly type = ArticleActionsTypes.SHOW_ALL;
}
export class ShowAllSuccessAction implements Action {
    readonly type = ArticleActionsTypes.SHOW_ALL_SUCCESS;
    constructor(public payload: Article[]) { }
}
export class CreateAction implements Action {
    readonly type = ArticleActionsTypes.CREATE;
    constructor(public payload: Article) { }
}
export class CreateSuccessAction implements Action {
    readonly type = ArticleActionsTypes.CREATE_SUCCESS;
    constructor(public payload: Article) { }
}
export class CreateFailureAction implements Action {
    readonly type = ArticleActionsTypes.CREATE_FAILURE;
    constructor(public payload: any) { }
}
export class GetByIdAction implements Action {
    readonly type = ArticleActionsTypes.GET_BY_ID;
    constructor(public payload: string) { }
}
export class GetByIdSuccessAction implements Action {
    readonly type = ArticleActionsTypes.GET_BY_ID_SUCCESS;
    constructor(public payload: Article[]) { }
}
export class ResetAction implements Action {
    readonly type = ArticleActionsTypes.RESET;
}

export type ALL_REDUCER_ACTIONS = ShowAllSuccessAction | CreateSuccessAction | CreateFailureAction
    | GetByIdSuccessAction | ResetAction;
