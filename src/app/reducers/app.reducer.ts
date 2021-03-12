import * as actionsApp from '../actions/app.action'
import { Transaction } from '../models/transaction.model';

export interface State{
    transaction: Transaction
    user_balance: number
    loading: boolean
    custom_page: "PAGE_ERROR" | "PAGE_SUCCESS"
    error_status: string
    error_text: string
}

const gas_random = Number((Math.random() * (0.003 - 0.002) + 0.002).toFixed(3))

const initState:State = {
    transaction:{address:'', amount:0, gas:gas_random},
    user_balance: 1200.075,
    loading: false,
    custom_page: "PAGE_SUCCESS",
    error_status: "",
    error_text: ""
}

export function appReducer(state = initState, action:actionsApp.actions): State{
    switch(action.type){
        case actionsApp.SET_TRANSACTION:
            return {
                ...state,
                transaction:{ ...action.data },
                user_balance: state.user_balance - action.data.amount - action.data.gas,
                custom_page: "PAGE_SUCCESS",
                loading: false,
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
        case actionsApp.SET_ERROR:
            return {
                ...state,
                custom_page: "PAGE_ERROR",
                error_text: action.error_text,
                error_status: action.error_status,
                loading: false
            }
        default: return state
    }
}