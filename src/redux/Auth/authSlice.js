import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { register, logIn, logOut, refreshUser } from "./auth.thunk";

const initialState = {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: builder => builder
        .addCase(refreshUser.pending, (state) => {
            state.isRefreshing = true;
        })
        .addCase(refreshUser.fulfilled, (state, action) => {
            state.user = action.payload;
            state.isLoggedIn = true;

        })
        .addCase(logOut.fulfilled, (state) => {
            state.user = { name: null, email: null };
            state.token = null;
            state.isLoggedIn = false;
        })

        .addMatcher(
            isAnyOf(register.fulfilled,
                logIn.fulfilled), (state, action) => {
                    state.user = action.payload.user;
                    state.token = action.payload.token;
                    state.isLoggedIn = true;
                })

        .addMatcher(
            isAnyOf(refreshUser.fulfilled, refreshUser.rejected), (state) => {
                state.isRefreshing = false;
            })

})

export const authReducer = authSlice.reducer;