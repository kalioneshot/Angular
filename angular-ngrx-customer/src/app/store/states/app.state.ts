import { CustomerState } from './customer.state';

// The application state contains the customer state, and also has the router state
export interface AppState {
    customerState: CustomerState;
}

// Then it has an initial application state
export const initialAppState: AppState = {
    customerState: null
};

// Finally, exports a function to get the initial state
export function getInitialState(): AppState {
    return initialAppState;
}
