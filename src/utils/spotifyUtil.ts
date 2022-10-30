import axios from 'axios';
import { store } from '../store';
import { SpotifyAccessToken } from '../types';

export const getSpotifyAccessToken = (
    spotifyRedirectURL: string
): SpotifyAccessToken => {
    return spotifyRedirectURL
        .slice(1)
        .split('&')
        .reduce((prev: any, curr: string) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const setAuthHeader = () => {
    const accessToken: string = store.getState().session.token;
    try {
        axios.defaults.headers.common[
            'Authorization'
        ] = `Bearer ${accessToken}`;
    } catch (error) {
        console.error('Error Setting Authentication Header', error);
    }
};
