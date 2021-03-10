import * as reducersUI from './reducers/ui.reducer'
import * as reducersAuth from './reducers/auth.reducer'

import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    ui:reducersUI.State,
    auth:reducersAuth.State,
}

export const appReducers:ActionReducerMap<AppState> = {
    ui: reducersUI.uiReducer,
    auth: reducersAuth.authReducer,
}