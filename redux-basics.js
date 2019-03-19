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
    if (action.type === 'INC_COUNTER') {
        // DON'T DO LIKE THAT! IT'S MUTATING STATE:
        //state.counter++
        //return state;

        // DO THAT INSTEAD: 
        return {
            // Fist copy old state: 
            ...state,
            // Then overwrite the property you want to adjust: 
            counter: state.counter + 1
            // returns updated state with updated counter
        }
    }

    if (action.type === 'ADD_COUNTER') {
        return {
            ...state, 
            counter: state.counter + action.value
        }
    }
    
    return state;
}

// Store
// A store needs to be initialized with a Reducer. We pass the Reducer. 
const store = createStore(rootReducer);
console.log(store.getState());
// ('node redux-basics.js' in the console => we get the console.logs)
// in this case it's undefined, because our rootReducer only returns the old state, but we never initialized that. 




// Dispatching action
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
//store.dispatch({type: 'ADD_COUNTER', payload: {}});
// action is a js object, inluding property: type. 
// type has to be all uppercase string type: 'INC_COUNTER' *increment counter*
// conventionally it's short and descriptive
// can be added any other properties. (value, id, name, whatever)
console.log(store.getState());

// Subscription

