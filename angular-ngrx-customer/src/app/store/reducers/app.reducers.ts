import { ActionReducerMap } from '@ngrx/store';

import { routerReducer } from '@ngrx/router-store';
import { customerReducers } from './customer.reducers';
import { AppState } from '../states/app.state';

// Here is where we add all the reducers to an app action reducer map.
// We use the action reducer map for added type checking.
// Later we are going to provide this app reducers to the store module.
export const appReducers: ActionReducerMap<AppState, any> = {
  customer: customerReducers,
};
