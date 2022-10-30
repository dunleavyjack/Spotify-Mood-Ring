import axios from 'axios';
import { User, SongsAndAudioFeatures } from '../types';
import { store } from '../store';
const { REACT_APP_NEST_BASE_URL: baseURL } = process.env;

export const getUserProfile = async (): Promise<User> => {
    const spotifyToken: string = store.getState().session.token;
    try {
        const { data } = await axios.get(`${baseURL}/users/${spotifyToken}`);
        return data;
    } catch (error) {
        console.error('Nest Server Error', error);
        return {} as User;
    }
};

export const getRecentSongsAndAudioFeatures =
    async (): Promise<SongsAndAudioFeatures> => {
        const spotifyToken: string = store.getState().session.token;
        try {
            const { data } = await axios.get(
                `${baseURL}/songs/${spotifyToken}`
            );
            return data;
        } catch (error) {
            console.error('Nest Server Error', error);
            return { songs: [], audioFeatures: [] } as SongsAndAudioFeatures;
        }
    };
