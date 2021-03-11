import { Action } from '@ngrx/store';
import { Transaction } from '../models/transaction.model';

export const SET_TRANSACTION = '[APP] Set Transaction'
export const SET_LOADING = '[APP] Set Loading'


export class SetTransactionAction implements Action {
    readonly type = SET_TRANSACTION
    constructor(public data:Transaction){}
}

export class SetTLoadingAction implements Action {
    readonly type = SET_LOADING
    constructor(public status:boolean){}
}

export type actions = SetTransactionAction | SetTLoadingAction