import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
}

// reducers have to run synchronously, hence you can't execute promises in there.
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.INCREMENT:
            return updateObject(state, {counter: state.counter + 1})
        case actionTypes.DECREMENT:
            return updateObject(state, {counter: state.counter - 1})
        case actionTypes.ADD:
            return updateObject(state, {counter: state.counter + action.val})
        case actionTypes.SUBTRACT :
            return updateObject(state, {counter: state.counter - action.val})
        // by default returns the current state
        default: return state
    }
    
}

export default reducer;