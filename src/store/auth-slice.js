import { createSlice } from '@reduxjs/toolkit';

const initialauthState = { isLoggedIn: false };

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

export const authActions = authSlice.actions;

export default authSlice.reducer;
