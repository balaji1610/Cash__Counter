import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 10,
};

export const CashCounterSlice = createSlice({
  name: "cashCounter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = CashCounterSlice.actions;

export default CashCounterSlice.reducer;
