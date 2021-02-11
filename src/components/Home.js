import React from 'react';
import Header from './Header';


const Home = (props) => {
    const {
        REACT_APP_SPOTIFY_CLIENT_ID,
        REACT_APP_SPOTIFY_AUTHORIZE_URL,
        REACT_APP_SPOTIFY_REDIRECT_URL
    } = process.env;

    const scopes = 'user-library-read user-read-recently-played';
    const encodedScopes = encodeURIComponent(scopes)

    const handleLogin = () => {
        window.location = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&scope=${encodedScopes}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
        // window.location = `${REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${REACT_APP_SPOTIFY_REDIRECT_URL}&response_type=token&show_dialog=true`;
    };

    return (
        <div className="login">
            <Header />
            <button onClick={handleLogin}> Login with Spotify </button>
        </div>
    )
}

export default Home