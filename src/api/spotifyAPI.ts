import axios from 'axios';
import { SongsAndAudioFeatures } from '../types';
import { User } from '../features/user/user.types';
import { store } from '../store';

const { REACT_APP_NEST_BASE_URL: baseURL } = process.env;

export const getUserProfile = async (spotifyToken: string): Promise<User> => {
    try {
        const {
            data: { userName, imageURL },
        } = await axios.get(`${baseURL}/users/${spotifyToken}`);
        return { username: userName, profileURL: imageURL }; // TODO: Update backend to match updated user object
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
