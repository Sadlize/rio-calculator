import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import {
  dungeonMaxTimestamp,
  TDungeonKeys,
  TDungeonWeeks,
} from 'utils/dungeons';

const initialObj = Object.keys(dungeonMaxTimestamp).reduce(
  (acc, dungeon) => ({
    ...acc,
    [dungeon]: {
      Tyrannical: dungeonMaxTimestamp[dungeon as TDungeonKeys],
      Fortified: dungeonMaxTimestamp[dungeon as TDungeonKeys],
    },
  }),
  {} as {
    [dungeon in TDungeonKeys]: { [week in TDungeonWeeks]: number };
  },
);

type TPayload = {
  value: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
};

export const timestampSlice = createSlice({
  name: 'timestamp',
  initialState: initialObj,
  reducers: {
    setTimestampValue(state, action: PayloadAction<TPayload>) {
      const { value, dungeon, week } = action.payload;
      state[dungeon][week] = dungeonMaxTimestamp[dungeon] - value;
    },
  },
});

export function setTimestampValue({
  value,
  dungeon,
  week,
}: {
  value: number;
  dungeon: TDungeonKeys;
  week: TDungeonWeeks;
}) {
  return {
    type: 'timestamp/setTimestampValue',
    payload: { value, dungeon, week },
  };
}
