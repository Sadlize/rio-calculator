import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { dungeonMaxTimestamp } from 'utils/dungeons';
import {
  getInitialSliceObject,
  TInitialObj,
  TPayloadValue,
} from 'redux/slices/index';

const initialObj = getInitialSliceObject({});

const timestampSlice = createSlice({
  name: 'timestamp',
  initialState: initialObj,
  reducers: {
    setTimestampValue(state, action: PayloadAction<TPayloadValue>) {
      const { value, dungeon, week } = action.payload;
      state[dungeon][week] = dungeonMaxTimestamp[dungeon] - value;
    },
    setImportTimestamp(state, action: PayloadAction<TInitialObj>) {
      return { ...action.payload };
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

export function setImportTimestamp(data: TInitialObj) {
  return {
    type: 'timestamp/setImportTimestamp',
    payload: data,
  };
}
