import { createSlice } from "@reduxjs/toolkit";
import Router from "../../route/router";
import Cookies from "js-cookie";

const initialState = {
    isLoggedIn: !!Cookies.get('userInfo'),
    userInfo: {}
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginUser: (state) => {
            state.isLoggedIn = true;
        },
        logoutUser: (state) => {
            state.isLoggedIn = false;
            Cookies.remove('userInfo');
            window.location.href = Router.home;
        }
    },
});

export const { loginUser, logoutUser } = authSlice.actions;

export default authSlice.reducer;