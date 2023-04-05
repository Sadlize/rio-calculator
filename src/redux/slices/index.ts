import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonObj,
  TDungeonWeeks,
} from 'utils/dungeons';
import calcPointsForKeyLevel from 'utils/calcScoreForKeyLevel';

const initialObj = Object.keys(dungeonMaxTimestamp).reduce(
  (acc, dungeon) => ({
    ...acc,
    [dungeon]: {
      Tyrannical: {
        keyLevel: 0,
        score: 0,
        clearTimeMS: dungeonMaxTimestamp[dungeon as TDungeonKeys],
      },
      Fortified: {
        keyLevel: 0,
        score: 0,
        clearTimeMS: dungeonMaxTimestamp[dungeon as TDungeonKeys],
      },
    },
  }),
  {} as TDungeonObj,
);

type TPayload = {
  amount: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  step?: number;
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState: initialObj,
  reducers: {
    setDungeonScore(state, action: PayloadAction<TPayload>) {
      const { amount, dungeon, week } = action.payload;
      state[dungeon][week] = {
        ...state[dungeon][week],
        keyLevel: amount,
        clearTimeMS: dungeonMaxTimestamp[dungeon],
        score: calcPointsForKeyLevel(amount),
      };
    },
    setTimestampScore(state, action: PayloadAction<TPayload>) {
      const { amount, step, dungeon, week } = action.payload;
      state[dungeon][week] = {
        ...state[dungeon][week],
        clearTimeMS: dungeonMaxTimestamp[dungeon] - amount,
        score: calcPointsForKeyLevel(
          state[dungeon][week].keyLevel,
          amount,
          step,
        ),
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
    type: 'score/setDungeonScore',
    payload: { amount, dungeon, week },
  };
}

export function setTimestampScore({
  amount,
  step,
  dungeon,
  week,
}: {
  amount: number;
  step: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
}) {
  return {
    type: 'score/setTimestampScore',
    payload: { amount, step, dungeon, week },
  };
}

export function setCharacterImport(data: TDungeonObj) {
  return {
    type: 'score/setCharacterImport',
    payload: data,
  };
}
