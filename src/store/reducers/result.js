import * as actionTypes from '../actions/actionTypes';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                // concat is like push, but returns a new array, so it doesn't changes the original
                // an immutable way of updating an array
                results: state.results.concat({id: new Date(), value: action.result})
                // if we are inside a reducer, and need to get to global state (like here we use value as state.counter), we need to get it as action payload => changed to action.result
            }
        case actionTypes.DELETE_RESULT:
            // normally we would do with splice, this however mutates the original array 
            const id = 2;
            //state.results.splice(id, 1);


            // INSTEAD: 
            // copy original array
            const newArray = [...state.results];
            // in this copy, if the elements are objects, they are still pointing to the same objects like they did before. So if we want to change something in an elemnt object, this copy is not enough. 
            // For deleting an element it's enough though. 
            newArray.splice(id, 1);

            // OR - with FILTER
            // we can use the filter method - returns a new array
            // here returns those elements that don't have id as index 
            //const updatedArray = state.results.filter((result, index) => index !== id);
            // OR 
            // resultElId => payload of action
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            console.log(updatedArray);
            return {
                ...state,
                // updated copy of the original
                //results: newArray
                results: updatedArray
            }
        // by default returns the current state
        default: return state
    }
    
}

export default reducer;