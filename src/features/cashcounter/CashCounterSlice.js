import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Services from "../../Services/ServicesAxios";

export const getApithunk = createAsyncThunk("CashCounter/Fetch", async () => {
  const res = await Services.getApi();
  return res;
});

const initialState = {
  users: [],
  loading: false,
  value: 10,
};
export const CashCounterSlice = createSlice({
  name: "cashCounter",
  initialState,
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

export default CashCounterSlice.reducer;
