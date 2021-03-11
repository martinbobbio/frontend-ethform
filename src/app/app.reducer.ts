import * as reducerApp from './reducers/app.reducer'

import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
    app:reducerApp.State,
}

export const appReducers:ActionReducerMap<AppState> = {
    app: reducerApp.appReducer,
}