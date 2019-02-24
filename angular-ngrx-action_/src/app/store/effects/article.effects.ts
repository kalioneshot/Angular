import { ArticleService } from 'src/app/services/article.service';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { switchMap, mergeMap, debounceTime } from 'rxjs/operators';
import { Action } from '@ngrx/store';
// tslint:disable-next-line:max-line-length
import { ShowAllSuccessAction, ArticleActionsTypes, GetByIdSuccessAction, GetByIdAction, CreateFailureAction, CreateSuccessAction, CreateAction, ShowAllAction } from '../actions/article.action';

// Article Effects class.
@Injectable()
export class ArticleEffects {

    constructor(private actions$: Actions, private articleService: ArticleService
    ) { }

    // Effect allowing to get all articles that will accept dispatched action of the type 'SHOW_ALL'
    @Effect()
    loadAllArticles$: Observable<Action> = this.actions$.pipe(
        ofType<ShowAllAction>(ArticleActionsTypes.SHOW_ALL),
        switchMap(() =>
            // Call the service.
            this.articleService.getAllArticles().map(data => new ShowAllSuccessAction(data))
        )
    );

    // Effect allowing to get a article by ID that will accept dispatched action of the type 'GET_BY_ID'
    @Effect()
    searchArticleById$: Observable<Action> = this.actions$.pipe(
        ofType<GetByIdAction>(ArticleActionsTypes.GET_BY_ID),
        // Rate limiter to call HTTP service.
        debounceTime(500),
        map(action => action.payload),
        switchMap(id =>
            this.articleService.getArticleById(id)
            .map(res => new GetByIdSuccessAction(res))
        )
    );

    // Effect allowing to create a article that will accept dispatched action of the type 'CREATE'
    @Effect()
    createArticle$: Observable<Action> = this.actions$.pipe(
        ofType<CreateAction>(ArticleActionsTypes.CREATE),
        map(action => action.payload),
        mergeMap(article =>
            // Call the HTTP service.
            this.articleService.createArticle(article)
            // If successful result we are dispatching new action that is CreateSuccessAction and passing the
            // result into it as payload of this new action. Store will handle this new dispatched action
            .map(res => new CreateSuccessAction(res))
            // If there is an error we will dispatch an error action CreateFailureAction as Observable.
            // To convert a value into Observable we can use RxJS function 'of'.
            .catch(error => of(new CreateFailureAction(error)))
        )
    );


}
