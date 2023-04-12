import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  getInitialSliceObject,
  TInitialObj,
  TPayloadValue,
} from 'redux/slices/index';

const initialObj = getInitialSliceObject(0);

const keyLevelSlice = createSlice({
  name: 'keyLevel',
  initialState: initialObj,
  reducers: {
    setKeyLevelValue(state, action: PayloadAction<TPayloadValue>) {
      const { value, dungeon, week } = action.payload;
      state[dungeon][week] = value;
    },
    setImportKeyLevel(state, action: PayloadAction<TInitialObj>) {
      return { ...action.payload };
    },
  },
});

export default keyLevelSlice;

export function setKeyLevelValue({ value, dungeon, week }: TPayloadValue) {
  return {
    type: 'keyLevel/setKeyLevelValue',
    payload: { value, dungeon, week },
  };
}

export function setImportKeyLevel(data: TInitialObj) {
  return {
    type: 'keyLevel/setImportKeyLevel',
    payload: data,
  };
}
