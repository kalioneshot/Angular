
import { createSelector } from '@ngrx/store';
import { IUserState } from '../state/user.state';
import { IAppState } from '../state/app.state';

const selectUsers = (state: IAppState) => state.users;

// Selectors are methods used for obtaining slices of store state.
// @ngrx/store provides a few helper functions for optimizing this selection.
export const selectUserList = createSelector(
    selectUsers,
    (state: IUserState) => state.users
);

export const selectSelectedUser = createSelector(
    selectUsers,
    (state: IUserState) => state.selectedUser
);
