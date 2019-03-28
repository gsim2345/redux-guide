
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBTRACT = 'SUBTRACT';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';


// we can also create actions with action creator function
export const increment = () => {
    // returns a type
    return {
        type: INCREMENT
    }
}; 

export const decrement = () => {
    return {
        type: DECREMENT
    }
};

export const add = (value) => {
    return {
        type: ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: SUBTRACT,
        val: value
    }
};

// adding middleware: our creator function won't return the action itself, but will return a function, that will eventually dispatch an action.
// only with that we can run async code
// redux-thunk runs between the dispatching of an action and the point of time the action reaches the reducer.
// we dispatch an action, but then redux-thunk comes in, has access to the action, and basically blocks the  action and dispatches it again in the future, can dispatch it whenever it wants.
// That's what allowing us to execute asyncrounous code inside. 

// we would create infinite loop if we would dispatch the creator - storeResult, so we instead create a new syncronous action creator, saveResult, and dispatch that. 
// we need to execure saveResult to update the store

export const saveResult = (res) => {
    return {
        type: STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    // gets dispatch function  as argument
    return dispatch => {
        // we want to store the result after 2 seconds
        setTimeout(() => {
            dispatch(saveResult(res));
        },2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: DELETE_RESULT,
        resultElId: resElId

    }
};