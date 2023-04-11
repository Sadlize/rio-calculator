import { configureStore } from '@reduxjs/toolkit';
import { scoreSlice } from '@/src/redux/slices';
import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { starSlice } from 'redux/slices/starSlice';
import { timestampSlice } from 'redux/slices/timestampSlice';

const store = configureStore({
  reducer: {
    score: scoreSlice.reducer,
    stars: starSlice.reducer,
    timestamps: timestampSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
