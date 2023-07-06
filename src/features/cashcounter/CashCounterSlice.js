import {createSlice } from "@reduxjs/toolkit";
import { getApithunk } from "./ThunkApi";

const initialState = {
  users: [],
  loading: false,
  value: 0,
};
export const CashCounterSlice = createSlice({
  name: "cashCounter",
  initialState,
  reducers: {
    callUsereffect: (state) => {
      state.value += 1;
    },
  },
  extraReducers: {
    [getApithunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getApithunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
    },
    [getApithunk.rejected]: (state, action) => {
      state.loading = false;
    },
  },
});
export const { callUsereffect } = CashCounterSlice.actions;
export default CashCounterSlice.reducer;
