import { UserState } from './user.state';
import { ConfigState } from './config.state';
import { RouterReducerState } from '@ngrx/router-store';

// The application state contains the user and config state, and also has the router state
export interface AppState {
    router?: RouterReducerState;
    users: UserState;
    config: ConfigState;
}

// Then it has an initial application state
export const initialAppState: AppState = {
    users: null,
    config: null
};

// Finally, exports a function to get the initial state (we are going to use it later)
export function getInitialState(): AppState {
    return initialAppState;
}
