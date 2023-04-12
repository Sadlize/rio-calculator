import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { getInitialSliceObject, TPayloadStars } from 'redux/slices/index';

const initialObj = getInitialSliceObject(1);

const starSlice = createSlice({
  name: 'star',
  initialState: initialObj,
  reducers: {
    setStarNumber(state, action: PayloadAction<TPayloadStars>) {
      const { number, dungeon, week } = action.payload;
      state[dungeon][week] = number;
    },
  },
});

export default starSlice;

export function setStarNumber({ number, dungeon, week }: TPayloadStars) {
  return {
    type: 'star/setStarNumber',
    payload: { number, dungeon, week },
  };
}
