import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const commonSlice = createSlice({
  name: 'common',
  initialState: { isImportMenuOpen: false },
  reducers: {
    setImportMenuOpenStatus(state, action: PayloadAction<boolean>) {
      state.isImportMenuOpen = action.payload;
    },
  },
});

export default commonSlice;

export function setImportMenuOpenStatus(isImportMenuOpen: boolean) {
  return {
    type: 'common/setImportMenuOpenStatus',
    payload: isImportMenuOpen,
  };
}
