import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    loginStart: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = false;
    },
    logout: (state) => {
      state.currentUser = null;
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const { loginSuccess, loginStart, loginFailure, logout } = videoSlice.actions;

export default videoSlice.reducer;
