import { Action } from '@ngrx/store';
import { Transaction } from '../models/transaction.model';

export const SET_TRANSACTION = '[APP] Set Transaction'
export const SET_LOADING = '[APP] Set Loading'
export const SET_CUSTOM_PAGE = '[APP] Set Custom Page'


export class SetTransactionAction implements Action {
    readonly type = SET_TRANSACTION
    constructor(public data:Transaction){}
}

export class SetLoadingAction implements Action {
    readonly type = SET_LOADING
    constructor(public status:boolean){}
}

export class SetCustomPageAction implements Action {
    readonly type = SET_CUSTOM_PAGE
    constructor(public custom_page:"PAGE_ERROR" | "PAGE_SUCCESS"){}
}

export type actions = SetTransactionAction | SetLoadingAction | SetCustomPageAction