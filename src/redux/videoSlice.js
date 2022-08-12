import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentVideo: null,
  isLoading: false,
  error: false,
};

export const videoSlice = createSlice({
  name: "video",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.isLoading = true;
    },
    fetchSuccess: (state, action) => {
      state.isLoading = false;
      state.currentVideo = action.payload;
    },
    fetchFailure: (state) => {
      state.currentVideo = null;
      state.isLoading = false;
      state.error = false;
    },
  },
});

export const { fetchSuccess, fetchStart, fetchFailure } = videoSlice.actions;

export default videoSlice.reducer;
