import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { SongsState } from './songs.types';
import { AudioFeatures, Songs } from '../../types';

const initialState: SongsState = {
    recentSongs: [],
    audioFeatures: [],
};

export const songsSlice = createSlice({
    name: 'songs',
    initialState,
    reducers: {
        setRecentSongs: (state, action: PayloadAction<Songs[]>) => {
            state.recentSongs = action.payload;
        },
        setAudioFeatures: (state, action: PayloadAction<AudioFeatures[]>) => {
            state.audioFeatures = action.payload;
        },
        clearSongs: (state) => {
            state.recentSongs = initialState.recentSongs;
            state.audioFeatures = initialState.audioFeatures;
        },
    },
});

export const songsActions = songsSlice.actions;
export const songsState = (state: RootState) => state.songs;
export default songsSlice.reducer;
