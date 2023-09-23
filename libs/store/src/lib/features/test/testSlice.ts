import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { TestState } from './testSlice.types';

const initialState: TestState = {
  hello: 'hi there',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setHello: (state, action: PayloadAction<string>) => {
      state.hello = action.payload;
    },
  },
});

export const testActions = testSlice.actions;
export const testState = (state: RootState) => state.test;
export default testSlice.reducer;
