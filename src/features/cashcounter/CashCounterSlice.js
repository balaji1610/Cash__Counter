import { createSlice } from "@reduxjs/toolkit";
import { getApithunk, getLowToHightThunk, getHighToLowThunk } from "./ThunkApi";

const initialState = {
  users: [],
  lowtohigh: [],
  hightolow: [],
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
    //getApithunk
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
    //getLowToHightThunk
    [getLowToHightThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getLowToHightThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.lowtohigh = action.payload;
    },
    [getLowToHightThunk.rejected]: (state, action) => {
      state.loading = false;
    },
    //getHighToLowThunk
    [getHighToLowThunk.pending]: (state, action) => {
      state.loading = true;
    },
    [getHighToLowThunk.fulfilled]: (state, action) => {
      state.loading = false;
      state.hightolow = action.payload;
    },
    [getHighToLowThunk.rejected]: (state, action) => {
      state.loading = false;
    },


  },
});
export const { callUsereffect } = CashCounterSlice.actions;
export default CashCounterSlice.reducer;
