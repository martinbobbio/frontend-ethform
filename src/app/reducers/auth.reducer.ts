import * as actionsAuth from './../actions/auth.action'

export interface State{
    user: any
}

const initState:State = {
    user:null
}

export function authReducer(state = initState, action:actionsAuth.actions): State{
    switch(action.type){
        case actionsAuth.SET_USER:
            return {
                user:{ ...action.user }
            }
        case actionsAuth.UNSET_USER:
            return {
                user:null
            }
        default: return state
    }
}