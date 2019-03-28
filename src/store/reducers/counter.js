import * as actionTypes from '../actions/actionTypes';

const initialState = {
    counter: 0
}

// reducers have to run synchronously, hence you can't execute promises in there.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            // returns immutably updated state 
            // clone the old object
            // can do with .assign
            const newState = Object.assign({}, state);
            newState.counter = state.counter + 1
            return  newState;
        case actionTypes.DECREMENT:
            // or can do the cloning with the spread operator: 
            return {
                // another immutable solution
                // not cloning first can lead to data loss, as what it returns will be the new state.
                // doesn't merge with state like in the original React state without Redux
                ...state,
                counter: state.counter - 1
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT :
            return {
                ...state,
                counter: state.counter - action.val
            }
        // by default returns the current state
        default: return state
    }
    
}

export default reducer;