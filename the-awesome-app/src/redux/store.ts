import {createStore, combineReducers} from 'redux';
import { authReducer } from './authReducer';






export const reduxStore = createStore(authReducer, 
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());