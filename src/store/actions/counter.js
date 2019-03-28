import * as actionTypes from './actionTypes';

// we can also create actions with action creator function
export const increment = () => {
    // returns a type
    return {
        type: actionTypes.INCREMENT
    }
}; 

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
};