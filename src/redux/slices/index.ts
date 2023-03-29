import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { dungeonMaxTimestamp } from "utils/dungeons";

export const scoreSlice = createSlice({
  name: "score",
  initialState: Object.keys(dungeonMaxTimestamp).reduce((acc, dungeon) => {
    return { ...acc, [dungeon]: { Tyrannical: 0, Fortified: 0 } };
  }, {}),
  reducers: {
    setDungeonScore(state, action: PayloadAction<number>) {
      const { amount, dungeon, week } = action.payload;
      state[dungeon][week] = amount;
    },
  },
});

export function setDungeonScore({
  amount,
  dungeon,
  week,
}: {
  amount: number;
  dungeon: string;
  week: "Tyrannical" | "Fortified";
}) {
  return {
    type: "score/setDungeonScore",
    payload: { amount, dungeon, week },
  };
}
