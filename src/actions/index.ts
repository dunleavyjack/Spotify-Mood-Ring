import { User, Songs, AudioFeatures } from '../types';

export const setToken = (token: string) => {
    return {
        type: 'SET_TOKEN',
        payload: token,
    };
};

export const setDemoStatus = (status: boolean) => {
    return {
        type: 'SET_DEMO',
        payload: status,
    };
};

export const setUser = (user: User | {}) => {
    return {
        type: 'SET_USER',
        payload: user,
    };
};

export const setRecentSongs = (recentSongs: Songs[] | []) => {
    return {
        type: 'SET_RECENT_SONGS',
        payload: recentSongs,
    };
};

export const setAudioFeatures = (audioFeatures: AudioFeatures[] | []) => {
    return {
        type: 'SET_AUDIO_FEATURES',
        payload: audioFeatures,
    };
};
