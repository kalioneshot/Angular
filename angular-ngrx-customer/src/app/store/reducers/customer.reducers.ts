import { initialCustomerState, CustomerState } from '../states/customer.state';
import { CustomerActions, CustomerActionEnum } from '../actions/customer.actions';

export const customerReducers = ( state = initialCustomerState, action: CustomerActions): CustomerState => {
    switch (action.type) {
        case CustomerActionEnum.GET_CUSTOMER_SUCCESS: {
            return {
                ...state,
                selectedCustomer: action.payload
            };
        }
        case CustomerActionEnum.GET_CUSTOMERS_SUCCESS: {
            return {
                ...state,
                customers : action.payload
            };
        }
        case CustomerActionEnum.CREATE_CUSTOMER_SUCCESS: {
            return {
                ...state,
                selectedCustomer : action.payload
            };
        }
        case CustomerActionEnum.DELETE_CUSTOMER_SUCCESS: {
            return {
                ...state,
                selectedCustomerId : action.payload
            };
        }
        default :
            return state;
    }
};
