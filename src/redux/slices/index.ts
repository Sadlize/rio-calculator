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
      },
      Fortified: {
        keyLevel: 0,
        score: 0,
      },
    },
  }),
  {} as TDungeonObj,
);

type TPayload = {
  value: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
  step?: number;
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState: initialObj,
  reducers: {
    setDungeonScore(state, action: PayloadAction<TPayload>) {
      const { value, dungeon, week } = action.payload;
      state[dungeon][week] = {
        ...state[dungeon][week],
        keyLevel: value,
        score: calcPointsForKeyLevel(value),
      };
    },
    setCharacterImport(state, action: PayloadAction<TDungeonObj>) {
      return { ...action.payload };
    },
  },
});

export function setDungeonScore({
  value,
  dungeon,
  week,
}: {
  value: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
}) {
  return {
    type: 'score/setDungeonScore',
    payload: { value, dungeon, week },
  };
}

export function setCharacterImport(data: TDungeonObj) {
  return {
    type: 'score/setCharacterImport',
    payload: data,
  };
}
