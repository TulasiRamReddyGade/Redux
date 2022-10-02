import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = { counter: 0, showCounter: false };
const initialauthState = { isLoggedIn: false };

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
        resetAll(state) {
            state.counter = 0;
            state.showCounter = false;
        },
    },
});
const authSlice = createSlice({
    name: 'auth',
    initialState: initialauthState,
    reducers: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        },
    },
});

const store = configureStore({
    reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
