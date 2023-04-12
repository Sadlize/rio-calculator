import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import calcScoreForKeyLevel from 'utils/calcScoreForKeyLevel';
import {
  getInitialSliceObject,
  TInitialObj,
  TPayloadScore,
} from 'redux/slices/index';
import { dungeonMaxTimestamp } from 'utils/dungeons';

const initialObj = getInitialSliceObject(0);

const scoreSlice = createSlice({
  name: 'score',
  initialState: initialObj,
  reducers: {
    setScoreValue(state, action: PayloadAction<TPayloadScore>) {
      const { keyLevel, timestamp, dungeon, week } = action.payload;

      if (keyLevel < 2) {
        return;
      }

      let timeStampMultiplier = 0;
      if (timestamp) {
        const step = Math.round(dungeonMaxTimestamp[dungeon] * 0.4) * 0.02;
        timeStampMultiplier = timestamp / step;
      }
      let bonusTimeStampPoints = 0.1 * timeStampMultiplier;
      if (timeStampMultiplier < 0) bonusTimeStampPoints -= 5;

      state[dungeon][week] =
        calcScoreForKeyLevel(keyLevel, timeStampMultiplier < 0) +
        bonusTimeStampPoints;
    },
    setImportScore(state, action: PayloadAction<TInitialObj>) {
      return { ...action.payload };
    },
  },
});

export default scoreSlice;

export function setScoreValue({
  keyLevel,
  timestamp,
  dungeon,
  week,
}: TPayloadScore) {
  return {
    type: 'score/setScoreValue',
    payload: { keyLevel, timestamp, dungeon, week },
  };
}

export function setImportScore(data: TInitialObj) {
  return {
    type: 'score/setImportScore',
    payload: data,
  };
}
