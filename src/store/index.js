import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: false };

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase(state, action) {
            state.counter += action.payload;
        },
        decrease(state, action) {
            state.counter -= action.payload;
        },
        toggleCounter(state) {
            // console.log(state.showCounter);
            state.showCounter = !state.showCounter;
        },
    },
});

const store = configureStore({
    reducer: counterSlice.reducer,
});

export const counterActions = counterSlice.actions;

export default store;
