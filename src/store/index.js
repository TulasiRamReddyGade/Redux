import { createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'incr') {
        return {
            counter: state.counter + action.val,
            showCounter: state.showCounter,
        };
    }
    if (action.type === 'decr') {
        return {
            counter: state.counter - action.val,
            showCounter: state.showCounter,
        };
    }

    if (action.type === 'counter') {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    }
    return state;
};

const store = createStore(counterReducer);

export default store;
