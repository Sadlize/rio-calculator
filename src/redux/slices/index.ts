import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export const scoreSlice = createSlice({
  name: "score",
  initialState: {
    value: 0,
  },
  reducers: {
    setScoreByAmount(state, action: PayloadAction<number>) {
      state.value = action.payload;
    },
  },
});

export function setScoreByAmount(amount: number) {
  return {
    type: "score/setScoreByAmount",
    payload: amount,
  };
}
