import { Customer } from 'src/app/models/customer';


// Interface with the user state structure
export interface CustomerState {
    customers: Customer[];
    selectedCustomer: Customer;
    selectedCustomerId: string;
}

// Initial user state that implements the recently created interface
export const initialCustomerState: CustomerState = {
    customers: null,
    selectedCustomer: null,
    selectedCustomerId: null
};
