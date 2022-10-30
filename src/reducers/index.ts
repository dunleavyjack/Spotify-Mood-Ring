import { combineReducers } from 'redux';
import { Songs, User, AudioFeatures } from '../types';

interface SetToken {
    type: 'SET_TOKEN';
    payload: string;
}

interface SetIsDemo {
    type: 'SET_DEMO';
    payload: boolean;
}
interface SetUser {
    type: 'SET_USER';
    payload: User;
}
interface SetRecentSongs {
    type: 'SET_RECENT_SONGS';
    payload: Songs;
}
interface SetAudioFeatures {
    type: 'SET_AUDIO_FEATURES';
    payload: AudioFeatures;
}
interface SetMood {
    type: 'SET_MOOD';
    payload: string;
}

type Action =
    | SetToken
    | SetIsDemo
    | SetUser
    | SetRecentSongs
    | SetAudioFeatures
    | SetMood;

const setSession = (session = { isDemo: false, token: '' }, action: Action) => {
    switch (action.type) {
        case 'SET_DEMO':
            return { ...session, isDemo: action.payload };
        case 'SET_TOKEN':
            return { ...session, token: action.payload };
        default:
            return session;
    }
};

const setUser = (user = null, action: Action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.payload;
        default:
            return user;
    }
};

const setRecentSongs = (recentSongs = [], action: Action) => {
    switch (action.type) {
        case 'SET_RECENT_SONGS':
            return action.payload;
        default:
            return recentSongs;
    }
};

const setAudioFeatures = (audioFeatures = [], action: Action) => {
    switch (action.type) {
        case 'SET_AUDIO_FEATURES':
            return action.payload;
        default:
            return audioFeatures;
    }
};

export default combineReducers({
    session: setSession,
    user: setUser,
    recentSongs: setRecentSongs,
    audioFeatures: setAudioFeatures,
});
