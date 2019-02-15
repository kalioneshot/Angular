import {RouterReducerState} from '@ngrx/router-store';
import { IUserState } from './user.state';
import { IConfigState } from './config.state';

// The application state contains the user and config state, and also has the router state
export interface IAppState {
    router?: RouterReducerState;
    users: IUserState;
    config: IConfigState;
}

// Then it has an initial application state
export const initialAppState: IAppState = {
    users: null,
    config: null
};

// Finally, exports a function to get the initial state (we are going to use it later)
export function getInitialState(): IAppState {
    return initialAppState;
}
