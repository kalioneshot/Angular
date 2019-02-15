import { IUser } from 'src/app/models/user.interface';

// Interface with the user state structure
export interface IUserState {
    users: IUser[];
    selectedUser: IUser;
}

// Initial user state that implements the recently created interface
export const initialUserState: IUserState = {
    users: null,
    selectedUser: null
};
