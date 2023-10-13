import { configureStore } from '@reduxjs/toolkit';
import testReducer from '../lib/features/test/testSlice';

/**
 * The root store for moodring.
 */
export const store = configureStore({
  reducer: {
    test: testReducer,
  },
});

/**
 * Represents the root state of moodring.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Strongly typed
 */
export type AppDispatch = typeof store.dispatch;
