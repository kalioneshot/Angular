import { createSelector } from '@ngrx/store';
import { ArticleState } from '../states/article.state';
import { AppState } from '../states/app.state';

const getArticleState = (state: AppState) => state.articleState;

export const getArticlesSelector = createSelector(
    getArticleState,
    (state: ArticleState) => state.articles
);

export const getMessageSelector = createSelector(
    getArticleState,
    (state: ArticleState) => state.message
);
