import { Article } from 'src/app/models/article';

// Interface with the user state structure
export interface ArticleState {
    articles: Article[];
    message: any;
}

// Initialization.
export const initialAricleState: ArticleState = {
    articles: null,
    message: null
};
