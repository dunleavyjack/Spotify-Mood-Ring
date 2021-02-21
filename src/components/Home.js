import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer'

const Home = (props) => {
    const {
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT_URL
    } = process.env;

    const scopes = 'user-read-private user-read-recently-played';
    const encodedScopes = encodeURIComponent(scopes)

    const handleLogin = () => {
        window.location = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodedScopes}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    return (
        <div>
            <Navbar />
            <div className="d-flex tan justify-content-center align-items-center content-body">
                <div>
                    <h1 className="title">mood ring</h1>
                    <h2 className="bold">How are you?</h2>
                    <h3>A mood guesser based on your </h3>
                    <h3>recently played music.</h3>
                    <div className="text-center mt-4">
                        <button className="btn-green" onClick={handleLogin}> Connect with Spotify </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home