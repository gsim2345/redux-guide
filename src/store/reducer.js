const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'INCREMENT':
            // returns immutably updated state 
            // clone the old object
            // can do with .assign
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return  newState;
        case 'DECREMENT':
            // or can do the cloning with the spread operator: 
            return {
                // another immutable solution
                // not cloning first can lead to data loss, as what it returns will be the new state.
                // doesn't merge with state like in the original React state without Redux
                ...state,
                counter: state.counter - 1
            }
        case 'ADD':
            return {
                ...state,
                counter: state.counter + action.value
            }
        case 'SUBTRACT' :
            return {
                ...state,
                counter: state.counter - action.value
            }
        case 'STORE_RESULT': 
            return {
                ...state,
                // concat is like push, but returns a new array, so it doesn't changes the original
                // an immutable way of updating an array
                results: state.results.concat({id: new Date(), value: state.counter})


            }
        // by default returns the current state
        default: return state
    }
    
}

export default reducer;