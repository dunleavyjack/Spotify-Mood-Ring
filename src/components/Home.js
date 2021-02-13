import React from 'react';
import Navbar from './Navbar';

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
            <div>
                <h1 className="title">mood ring</h1>
                <button onClick={handleLogin}> Login with Spotify </button>
            </div>
        </div>
    )
}

export default Home