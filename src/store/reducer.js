const initialState = {
    counter: 0
}

const reducer = (state = initialState, action) => {
    if (action.type === 'INCREMENT') {
        // returns immutably updated state 
        return {
            // in more complex objects: 
            // ...state
            // here enough:
            counter: state.counter + 1
        }
    }
    return state;
}

export default reducer;