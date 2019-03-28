import * as actionTypes from './actionTypes';

// adding middleware: our creator function won't return the action itself, but will return a function, that will eventually dispatch an action.
// only with that we can run async code
// redux-thunk runs between the dispatching of an action and the point of time the action reaches the reducer.
// we dispatch an action, but then redux-thunk comes in, has access to the action, and basically blocks the  action and dispatches it again in the future, can dispatch it whenever it wants.
// That's what allowing us to execute asyncrounous code inside. 

// we would create infinite loop if we would dispatch the creator - storeResult, so we instead create a new syncronous action creator, saveResult, and dispatch that. 
// we need to execure saveResult to update the store

export const saveResult = (res) => {
    // we can put our data transformations here:
    //const updatedResult = res * 2;
    // better to put the logic though into the reducer, so every logic is at one place
    return {
        type: actionTypes.STORE_RESULT,
        result: res
    }
}

export const storeResult = (res) => {
    // gets dispatch function  as argument
    // if we decide to use actions for our logic, we can use getState function to get the current state:
    // fx: want to save some data for a given user, and we need the id that is stored in the redux state. We can get the id first, and than reach out to the web.
    // however it's better not to use it if we can avoid, or really just as a fallback, and not overuse it. Instead try to pass the data through the dispatches.  

    return (dispatch, getState )=> {
        // we want to store the result after 2 seconds
        setTimeout(() => {
            const oldCounter = getState().ctr.counter;
            console.log(oldCounter);
            dispatch(saveResult(res));
        },2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId

    }
};