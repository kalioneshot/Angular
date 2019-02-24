import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { environment } from 'src/environments/environment';
import { articleReducers } from './article.reducer';

export const appReducers: ActionReducerMap<AppState, any> = {
  articleState: articleReducers
};

export function logger(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
  // tslint:disable-next-line:only-arrow-functions
  return function(state: AppState, action: any): AppState {
    console.log('state', state);
    console.log('action', action);
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
  ? [logger]
  : [];
