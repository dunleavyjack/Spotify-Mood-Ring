import { useDispatch, useSelector } from 'react-redux';
import type { TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

/**
 * A typed version of Redux Toolkit's `useDispatch` hook.
 *
 * Can be used to dispatch actions to update the Redux store.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * A type version of Redux Toolkit's `useSelector` hook.
 *
 * Can be used to access values from the Redux store.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
