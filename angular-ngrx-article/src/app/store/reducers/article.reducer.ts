import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ArticleActionsTypes, ALL_REDUCER_ACTIONS } from '../actions/article.action';
import { initialAricleState, ArticleState } from '../states/article.state';

export function articleReducers(state = initialAricleState, action: ALL_REDUCER_ACTIONS): ArticleState {
    switch (action.type) {
        case ArticleActionsTypes.SHOW_ALL_SUCCESS: {
            return { articles: action.payload, message: 'Success' };
        }
        case ArticleActionsTypes.CREATE_SUCCESS: {
            return { articles: [action.payload], message: 'Article Created.' };
        }
        case ArticleActionsTypes.CREATE_FAILURE: {
            return { articles: [], message: action.payload };
        }
        case ArticleActionsTypes.GET_BY_ID_SUCCESS: {
            console.log(action.payload);
            return { articles: action.payload, message: 'Success' };
        }
        case ArticleActionsTypes.RESET: {
            return { articles: [], message: '' };
        }
        default: {
            return state;
        }
    }
}

