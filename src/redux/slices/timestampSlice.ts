import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { dungeonMaxTimestamp } from 'utils/dungeons';
import { getInitialSliceObject, TPayloadValue } from 'redux/slices/index';

const initialObj = getInitialSliceObject({});

const timestampSlice = createSlice({
  name: 'timestamp',
  initialState: initialObj,
  reducers: {
    setTimestampValue(state, action: PayloadAction<TPayloadValue>) {
      const { value, dungeon, week } = action.payload;
      state[dungeon][week] = dungeonMaxTimestamp[dungeon] - value;
    },
  },
});

export default timestampSlice;

export function setTimestampValue({ value, dungeon, week }: TPayloadValue) {
  return {
    type: 'timestamp/setTimestampValue',
    payload: { value, dungeon, week },
  };
}
