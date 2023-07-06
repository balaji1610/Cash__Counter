import { createAsyncThunk } from "@reduxjs/toolkit";
import Services from "../../Services/ServicesAxios";

export const getApithunk = createAsyncThunk("CashCounter/Fetch", async () => {
  const res = await Services.getApi();
  return res;
});

export const postApithunk = createAsyncThunk(
  "CashCounter/Postitems",
  async (payload) => {
    const res = await Services.postApi(payload);

    return res;
  }
);
