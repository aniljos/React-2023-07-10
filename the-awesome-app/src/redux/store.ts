import {createStore, combineReducers} from 'redux';
import { authReducer } from './authReducer';




const reducers = combineReducers({
    auth: authReducer,


});

export const reduxStore = createStore(reducers, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());


export type AppDispatch = typeof reduxStore.dispatch; 
export type AppState = ReturnType<typeof reduxStore.getState>;