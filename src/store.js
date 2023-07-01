import { configureStore } from "@reduxjs/toolkit";
import CashCounterSlice from "./features/cashcounter/CashCounterSlice";

export const store = configureStore({
  reducer: {
    cashCounter: CashCounterSlice,
  },
});
