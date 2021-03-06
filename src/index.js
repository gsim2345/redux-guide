import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';


// when we split the reducer, we also split the state. ctr and res also refers to state. 
const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// adding middleware - related to store - whatever you want with the store (here we log the content)
const logger = store => {
    // we return another function, that receives the 'next' argument - can name it whatever we want
    return next => {
        // this function also returns a function. That receives the dispatched action as input
        return action => {
            console.log('[Middleware] Dispatchimg', action);
            // this will let the action continue to the reducer
            //next is simply a function passed into the middleware (by Redux) which you need to call to "forward" the action. Otherwise, it will not proceed to the next middleware in line (or to the reducer ultimately).
            const result = next(action);
            console.log('[Middleware] Next state', store.getState());
            return result;
        }
    }

}

// TO SETUP REDUX DEVTOOLS: 
//https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// install right before or when our application starts.
// before we mount our app component to the DOM 
// takes the reducer as input. 
// we usually store the reducers in their own files
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, thunk)));
// we can add our middlewear to the store with 'applyMiddleware" - called enhancer - whatever you want with the store
// can pass a list of middlewears to applyMiddleware

// Provider is a helper component. Allows us to inject our store to react components
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();


