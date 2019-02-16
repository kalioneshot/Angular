
import { createSelector } from '@ngrx/store';
import { AppState } from '../states/app.state';
import { CustomerState } from '../states/customer.state';

const selectCustomers = (state: AppState) => state.customerState;

// Selectors are methods used for obtaining slices of store state.
// @ngrx/store provides a few helper functions for optimizing this selection.
export const customersSelector = createSelector(
    selectCustomers,
    (state: CustomerState) => state.customers
);

export const customerFocusSelector = createSelector(
    selectCustomers,
    (state: CustomerState) => state.customers
);

export const customerIdFocusSelector = createSelector(
    selectCustomers,
    (state: CustomerState) => state.selectedCustomerId
);
