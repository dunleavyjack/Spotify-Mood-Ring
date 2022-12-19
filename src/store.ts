import { configureStore } from '@reduxjs/toolkit';
import sessionReducer from './features/session/sessionSlice';
import userReducer from './features/user/userSlice';
import songsReducer from './features/songs/songsSlice';

export const store = configureStore({
    reducer: {
        session: sessionReducer,
        user: userReducer,
        songs: songsReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
