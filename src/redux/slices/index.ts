import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonObj,
  TDungeonWeeks,
} from "utils/dungeons";
import { calcPointsForKeyLevel } from "utils/calcScoreForKeyLevel";

const initialObj = Object.keys(dungeonMaxTimestamp).reduce((acc, dungeon) => {
  return {
    ...acc,
    [dungeon]: {
      Tyrannical: { mythic_level: 0, score: 0 },
      Fortified: { mythic_level: 0, score: 0 },
    },
  };
}, {} as TDungeonObj);

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
      state[dungeon][week] = {
        mythic_level: amount,
        score: calcPointsForKeyLevel(amount),
      };
    },
    setCharacterImport(state, action: PayloadAction<TDungeonObj>) {
      return { ...action.payload };
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

export function setCharacterImport(data: TDungeonObj) {
  return {
    type: "score/setCharacterImport",
    payload: data,
  };
}
