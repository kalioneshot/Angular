import { initialUserState, IUserState } from '../state/user.state';
import {UserActions, EUserActions} from '../actions/user.actions';

// Let’s discuss the implementation:
// 1. The declaration of the reducer receive the state and, in this case, the user actions and returns an IUserState.
// 2. Using a switch statement we generate cases for each possible action type.
// 3. Each case returns a new object that is the result of merging the old state and the new value.
// 4. All reducers have a default result that just returns the state without any changes.
export const userReducers = ( state = initialUserState, action: UserActions): IUserState => {
    switch (action.type) {
        case EUserActions.GetUsersSucess: {
            return {
                ...state,
                users: action.payload
            };
        }
        case EUserActions.GetUserSucess: {
            return {
                ...state,
                selectedUser: action.payload
            };
        }
        default :
            return state;
    }
};
