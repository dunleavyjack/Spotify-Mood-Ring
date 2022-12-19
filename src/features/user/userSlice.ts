import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';
import { UserState } from './user.types';

const initialState: UserState = {
    username: '',
    profileURL: '',
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserState>) => {
            const { username, profileURL } = action.payload;
            state.username = username;
            state.profileURL = profileURL;
        },
        clearUser: (state) => {
            state.username = initialState.username;
            state.profileURL = initialState.profileURL;
        },
    },
});

export const userActions = userSlice.actions;
export const userState = (state: RootState) => state.user;
export default userSlice.reducer;
