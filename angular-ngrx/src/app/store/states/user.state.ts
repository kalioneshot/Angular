import { User } from 'src/app/models/user';

// Interface with the user state structure
export interface UserState {
    users: User[];
    userCreated: User;
    selectedUser: User;
    message: any;
}

// Initial user state that implements the recently created interface
export const initialUserState: UserState = {
    users: null,
    userCreated: null,
    selectedUser: null,
    message: ''
};
