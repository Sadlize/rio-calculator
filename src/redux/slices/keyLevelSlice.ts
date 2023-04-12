import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getInitialSliceObject, TPayloadValue } from 'redux/slices/index';

const initialObj = getInitialSliceObject(0);

const keyLevelSlice = createSlice({
  name: 'keyLevel',
  initialState: initialObj,
  reducers: {
    setKeyLevelValue(state, action: PayloadAction<TPayloadValue>) {
      const { value, dungeon, week } = action.payload;
      state[dungeon][week] = value;
    },
    // setCharacterImport(state, action: PayloadAction<TDungeonObj>) {
    //   return { ...action.payload };
    // },
  },
});

export default keyLevelSlice;

export function setKeyLevelValue({ value, dungeon, week }: TPayloadValue) {
  return {
    type: 'keyLevel/setKeyLevelValue',
    payload: { value, dungeon, week },
  };
}
