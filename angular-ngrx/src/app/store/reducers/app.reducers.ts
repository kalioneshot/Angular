import { ActionReducerMap } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { configReducers } from './config.reducers';
import { userReducers } from './user.reducers';

// Here is where we add all the reducers to an app action reducer map.
// We use the action reducer map for added type checking.
// Later we are going to provide this app reducers to the store module.
export const appReducers: ActionReducerMap<IAppState, any> = {
  users: userReducers,
  config: configReducers
};
