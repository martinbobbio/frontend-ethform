import * as actionsApp from '../actions/app.action'
import { Transaction } from '../models/transaction.model';

export interface State{
    transaction: Transaction
    user_balance: number
    loading: boolean
}

const gas_random = Number((Math.random() * (0.003 - 0.002) + 0.002).toFixed(3))

const initState:State = {
    transaction:{address:'', amount:0, gas:gas_random},
    user_balance: 1200.075,
    loading: false,
}

export function appReducer(state = initState, action:actionsApp.actions): State{
    switch(action.type){
        case actionsApp.SET_TRANSACTION:
            return {
                transaction:{ ...action.data },
                user_balance: state.user_balance - action.data.amount,
                loading: false
            }
        case actionsApp.SET_LOADING:
            return {
                transaction: state.transaction,
                user_balance: state.user_balance,
                loading: action.status
            }
        default: return state
    }
}