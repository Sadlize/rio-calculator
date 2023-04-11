import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonWeeks,
} from 'utils/dungeons';

type TStarNumber = 0 | 1 | 2 | 3;

const initialObj = Object.keys(dungeonMaxTimestamp).reduce(
  (acc, dungeon) => ({
    ...acc,
    [dungeon]: {
      Tyrannical: 1,
      Fortified: 1,
    },
  }),
  {} as {
    [dungeon in TDungeonKeys]: { [week in TDungeonWeeks]: TStarNumber };
  },
);

type TPayload = {
  amount: TStarNumber;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

export const starSlice = createSlice({
  name: 'star',
  initialState: initialObj,
  reducers: {
    setStarNumber(state, action: PayloadAction<TPayload>) {
      const { amount, dungeon, week } = action.payload;
      state[dungeon][week] = amount;
    },
  },
});

export function setStarNumber({
  amount,
  dungeon,
  week,
}: {
  amount: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
}) {
  return {
    type: 'star/setStarNumber',
    payload: { amount, dungeon, week },
  };
}
