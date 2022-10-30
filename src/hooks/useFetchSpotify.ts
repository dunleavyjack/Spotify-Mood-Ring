import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    getUserProfile,
    getRecentSongsAndAudioFeatures,
} from '../api/spotifyAPI';
import { setRecentSongs, setUser, setAudioFeatures } from '../actions';
import { User, SongsAndAudioFeatures } from '../types';
import { store } from '../store';
import {
    demoUser,
    demoRecentSongs,
    demoAudioFeatures,
} from '../assets/demo/demoSampleData';

export const useFetchSpotify = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isDemo } = store.getState().session;
    const [spotifyRequestsComplete, setSpotifyRequestsComplete] =
        useState<boolean>(false);

    useEffect(() => {
        const fetchUserAndSongs = async () => {
            try {
                const userProfile: User = await getUserProfile();
                dispatch(setUser(userProfile));

                const { songs, audioFeatures }: SongsAndAudioFeatures =
                    await getRecentSongsAndAudioFeatures();
                if (songs.length && audioFeatures.length) {
                    dispatch(setRecentSongs(songs));
                    dispatch(setAudioFeatures(audioFeatures));
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
            dispatch(setUser(demoUser));
            dispatch(setRecentSongs(demoRecentSongs));
            dispatch(setAudioFeatures(demoAudioFeatures));
            setSpotifyRequestsComplete(true);
        };

        isDemo ? setSampleSongsAndUser() : fetchUserAndSongs();
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    return spotifyRequestsComplete;
};
