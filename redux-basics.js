// redux can be used without React, so as an exmple we execute it simply with node.js
const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter: 0
}

// Reducer
// 2 arguments: 
// 1. Current state
// 2. The action 
// ES6 feature, can define an inital value in the paramaters - if state is undefined, takes initialState instead. 
const rootReducer = (state = initialState, action) => {
    return state;
}

// Store
// A store needs to be initialized with a Reducer. We pass the Reducer. 
const store = createStore(rootReducer);
console.log(store.getState());
// ('node redux-basics.js' in the console => we get the console.logs)
// in this case it's undefined, because our rootReducer only returns the old state, but we never initialized that. 




// Dispatching action

// Subscription

