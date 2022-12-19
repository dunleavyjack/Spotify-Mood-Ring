import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import type { SessionState } from './session.types';

const initialState: SessionState = {
    isDemo: false,
    token: '',
};

export const sessionSlice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setIsDemo: (state, action: PayloadAction<boolean>) => {
            state.isDemo = action.payload;
        },
        clearIsDemo: (state) => {
            state.isDemo = initialState.isDemo;
        },
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
        },
        clearToken: (state) => {
            state.token = initialState.token;
        },
    },
});

export const sessionActions = sessionSlice.actions;
export const sessionState = (state: RootState) => state.session;
export default sessionSlice.reducer;
