import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { authReducer } from './authReducer';
import { gadgetReducer } from './gadgetsReducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    auth: authReducer,
    gadgets: gadgetReducer

});

const loggingMiddleware = (store:any) => {
    return (next: any) => {
        return (action: any) => {

            console.log("loggingMiddleware dispatch action: ", action);
            console.log("loggingMiddleware current state: ", store.getState());
            const result = next(action);
            console.log("loggingMiddleware updated state: ", store.getState());
            
        }
    }
}

// export const reduxStore = createStore(reducers, 
//     (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const reduxStore = createStore(reducers, composeEnhancers( applyMiddleware(loggingMiddleware, thunk))); 


export type AppDispatch = typeof reduxStore.dispatch; 
export type AppState = ReturnType<typeof reduxStore.getState>;