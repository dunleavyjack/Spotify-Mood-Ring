import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    getUserProfile,
    getRecentSongsAndAudioFeatures,
} from '../api/spotifyAPI';
import { SongsAndAudioFeatures } from '../types';
import { User } from '../features/user/user.types';
import { store } from '../store';
import {
    demoUser,
    demoRecentSongs,
    demoAudioFeatures,
} from '../assets/demo/demoSampleData';
import { useAppSelector } from './reduxHooks';
import { sessionState } from '../features/session/sessionSlice';
import { songsActions } from '../features/songs/songsSlice';
import { userActions } from '../features/user/userSlice';

export const useFetchSpotify = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { token, isDemo } = useAppSelector(sessionState);

    const [spotifyRequestsComplete, setSpotifyRequestsComplete] =
        useState<boolean>(false);

    useEffect(() => {
        const fetchUserAndSongs = async () => {
            try {
                const userProfile: User = await getUserProfile(token);
                dispatch(userActions.setUser(userProfile));

                const { songs, audioFeatures }: SongsAndAudioFeatures =
                    await getRecentSongsAndAudioFeatures();
                if (songs.length && audioFeatures.length) {
                    dispatch(songsActions.setRecentSongs(songs));
                    dispatch(songsActions.setAudioFeatures(audioFeatures));
                    setSpotifyRequestsComplete(true);
                } else {
                    console.error(
                        'Nest connection error. Empty response object.'
                    );
                    navigate('/error');
                }
            } catch (error) {
                console.error(error);
                navigate('/error');
            }
        };

        const setSampleSongsAndUser = () => {
            dispatch(userActions.setUser(demoUser));
            dispatch(songsActions.setRecentSongs(demoRecentSongs));
            dispatch(songsActions.setAudioFeatures(demoAudioFeatures));
            setSpotifyRequestsComplete(true);
        };

        isDemo ? setSampleSongsAndUser() : fetchUserAndSongs();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return spotifyRequestsComplete;
};
