import { ActionReducerMap } from '@ngrx/store';

import { AppState } from '../states/app.state';
import { customerReducers } from './customer.reducers';


// Here is where we add all the reducers to an app action reducer map.
export const appReducers: ActionReducerMap<AppState, any> = {
  customerState: customerReducers
};
