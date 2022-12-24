import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
    TAG_LINE,
    VIEW_DEMO,
    CONNECT_WITH_SPOTIFY,
    DONT_HAVE_A_SPOTIFY_ACCOUNT,
} from '../../constants/text';
import './HomePage.css';
import { sessionActions } from '../../features/session/sessionSlice';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/animations/tree.json';

export const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        REACT_APP_SPOTIFY_AUTHORIZE_URL: spotifyURL,
        REACT_APP_SPOTIFY_CLIENT_ID: cliendID,
        REACT_APP_SPOTIFY_REDIECT_URI: redirectURI,
        REACT_APP_SPOTIFY_SCOPES: spotifyScopes,
    }: any = process.env;

    const handleSpotifyLogin = (): void => {
        window.location.href = `${spotifyURL}?client_id=${cliendID}&scope=${encodeURIComponent(
            spotifyScopes
        )}&redirect_uri=${redirectURI}/redirect&response_type=token&show_dialog=true`;
    };

    const handleDemoLogin = (): void => {
        dispatch(sessionActions.setIsDemo(true));
        navigate('/analyzing');
    };

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <main className="page-content">
            <section className="home-content">
                <Lottie options={defaultOptions} height={200} width={200} />
                <h1 className="home-tagline">{TAG_LINE}</h1>
                <button
                    className="spotify-login-button"
                    onClick={handleSpotifyLogin}
                >
                    {CONNECT_WITH_SPOTIFY}
                </button>
                <h2>{DONT_HAVE_A_SPOTIFY_ACCOUNT}</h2>
                <button className="demo-login-button" onClick={handleDemoLogin}>
                    {VIEW_DEMO}
                </button>
            </section>
        </main>
    );
};
