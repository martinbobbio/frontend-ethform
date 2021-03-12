import * as actionsApp from '../actions/app.action'
import { Transaction } from '../models/transaction.model';

export interface State{
    transaction: Transaction
    user_balance: number
    loading: boolean
    custom_page: "PAGE_ERROR" | "PAGE_SUCCESS"
}

const gas_random = Number((Math.random() * (0.003 - 0.002) + 0.002).toFixed(3))

const initState:State = {
    transaction:{address:'', amount:0, gas:gas_random},
    user_balance: 1200.075,
    loading: false,
    custom_page: "PAGE_SUCCESS"
}

export function appReducer(state = initState, action:actionsApp.actions): State{
    switch(action.type){
        case actionsApp.SET_TRANSACTION:
            return {
                ...state,
                transaction:{ ...action.data },
                user_balance: state.user_balance - action.data.amount - action.data.gas
            }
        case actionsApp.SET_LOADING:
            return {
                ...state,
                loading: action.status,
            }
        case actionsApp.SET_CUSTOM_PAGE:
            return {
                ...state,
                custom_page: action.custom_page,
            }
        default: return state
    }
}