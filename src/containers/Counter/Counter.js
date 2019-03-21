import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                {/* we no longer pass our counterChangedHandler function, but  our dispatching action function */}
                {/*<CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />*/}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}  />
            </div>
        );
    }
}


// connect - a function that returns a higher order component
// we can pass in some configuration for the given container
// we pass two information: 
// 1. Which part of the whole application state we want to get. 
const mapStateToProps = state => {
    return {
        ctr: state.counter
    };
}
// 2. Which actions we want to dispatch
// uses the dispatch helper function as an argument , that comes with redux
const mapDispatchToProps = (dispatch) => {
    return {
        // returns all 4 functions at once
        onIncrementCounter: () => dispatch({type: 'INCREMENT'}),
        onDecrementCounter: () => dispatch({type: 'DECREMENT'}),
        onAddCounter: () => dispatch({type: 'ADD'}),
        onSubtractCounter: () => dispatch({type: 'SUBTRACT'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
// in case one of the arguments are not needed:
// connect(mapStateToProps)(Counter);
// connect(null, mapDispatchToProps)(Counter);