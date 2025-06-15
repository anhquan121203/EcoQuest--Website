import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: localStorage.getItem("access_token") || null,
  access_token: localStorage.getItem("access_token") || null,
  refresh_token: localStorage.getItem("refresh_token") || null,
  avatar: null,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      state.access_token = action.payload.access_token;
      state.refresh_token = action.payload.refresh_token;

      // Save tokens and user in localStorage
      localStorage.setItem("access_token", action.payload.access_token);
      localStorage.setItem("refresh_token", action.payload.refresh_token);
    },

    logout(state) {
      state.isLoggedIn = false;
      state.access_token = null;
      state.refresh_token = null;

      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
    },

    setUser(state, action) {
      state.user = action.payload.user;
    },

    updateAvatar(state, action) {
      state.avatar = action.payload;
    },
  },
});

export const { login, logout, updateAvatar, setUser } = authSlice.actions;
export default authSlice;
