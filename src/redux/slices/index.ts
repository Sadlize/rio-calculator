import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonWeeks,
} from "utils/dungeons";

const initialObj: { [key: string]: { Tyrannical: number; Fortified: number } } =
  Object.keys(dungeonMaxTimestamp).reduce((acc, dungeon) => {
    return { ...acc, [dungeon]: { Tyrannical: 0, Fortified: 0 } };
  }, {});

type TPayload = {
  amount: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

export const scoreSlice = createSlice({
  name: "score",
  initialState: initialObj,
  reducers: {
    setDungeonScore(state, action: PayloadAction<TPayload>) {
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
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
}) {
  return {
    type: "score/setDungeonScore",
    payload: { amount, dungeon, week },
  };
}
