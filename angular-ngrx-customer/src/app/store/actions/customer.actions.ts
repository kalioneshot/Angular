import { Action } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

// Enum containing the definition for the User actions types
export enum CustomerActionEnum {
    GET_CUSTOMER = '[Customer] Get Customer',
    GET_CUSTOMERS = '[Customers] Get Customers',
    CREATE_CUSTOMER = '[Customer] Create Customer',
    DELETE_CUSTOMER = '[Customer] Delete Customer',
    GET_CUSTOMER_SUCCESS = '[Customer] Get Customer Success',
    GET_CUSTOMERS_SUCCESS = '[Customer] Get Customers Success',
    CREATE_CUSTOMER_SUCCESS = '[Customer] Create Customer Success',
    DELETE_CUSTOMER_SUCCESS = '[Customer] Delete Customer Success'
}

export class GetCustomerAction implements Action {
    public readonly type = CustomerActionEnum.GET_CUSTOMER_SUCCESS;
    constructor(public payload: string) {}
}

export class GetCustomerSuccessAction implements Action {
    public readonly type = CustomerActionEnum.GET_CUSTOMER_SUCCESS;
    constructor(public payload: Customer) {}
}

export class GetCustomersAction implements Action {
    public readonly type = CustomerActionEnum.GET_CUSTOMERS_SUCCESS;
}

export class GetCustomersSuccessAction implements Action {
    public readonly type = CustomerActionEnum.GET_CUSTOMERS_SUCCESS;
    constructor(public payload: Customer[]) {}
}

export class CreateCustomerAction implements Action {
    public readonly type = CustomerActionEnum.CREATE_CUSTOMER;
    constructor(public payload: Customer) {}
}

export class CreateCustomerSuccessAction implements Action {
    public readonly type = CustomerActionEnum.CREATE_CUSTOMER_SUCCESS;
    constructor(public payload: Customer) {}
}

export class DeleteCustomerAction implements Action {
    public readonly type = CustomerActionEnum.DELETE_CUSTOMER;
    constructor(public payload: string) {}
}

export class DeleteCustomerSuccessAction implements Action {
    public readonly type = CustomerActionEnum.DELETE_CUSTOMER_SUCCESS;
    constructor(public payload: string) {}
}

export type CustomerActions =
    GetCustomerAction |
    GetCustomerSuccessAction |
    GetCustomersAction |
    GetCustomersSuccessAction |
    CreateCustomerAction |
    CreateCustomerSuccessAction |
    DeleteCustomerAction |
    DeleteCustomerSuccessAction;

