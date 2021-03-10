import { Action } from '@ngrx/store';

export const SET_USER = '[AUTH] Set User'
export const UNSET_USER = '[AUTH] Unset User'

export class SetUserAction implements Action {
    readonly type = SET_USER
    constructor(public user:any){}
}

export class UnsetUserAction implements Action {
    readonly type = UNSET_USER
}

export type actions = SetUserAction | UnsetUserAction