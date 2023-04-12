import { configureStore } from '@reduxjs/toolkit';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import starSlice from 'redux/slices/starSlice';
import timestampSlice from 'redux/slices/timestampSlice';
import scoreSlice from 'redux/slices/scoreSlice';
import keyLevelSlice from 'redux/slices/keyLevelSlice';

const store = configureStore({
  reducer: {
    scores: scoreSlice.reducer,
    keyLevels: keyLevelSlice.reducer,
    stars: starSlice.reducer,
    timestamps: timestampSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
