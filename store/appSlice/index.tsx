import { createSlice } from "@reduxjs/toolkit";
type appState = {
  isLoading: boolean;
};

const initialState: appState = {
  isLoading: false,
};
const appSlice = createSlice({
  name: "test",
  initialState: initialState,
  reducers: {
    showLoading(state) {
      state.isLoading = true;
    },
    hideLoading(state) {
      state.isLoading = false;
    },
  },
});

export const { hideLoading, showLoading } = appSlice.actions;

export default appSlice;
