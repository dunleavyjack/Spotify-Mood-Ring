import React from "react";
import { useDispatch } from "react-redux";
import { setDemoStatus } from "../../actions";
import { useNavigate } from "react-router-dom";
import { useViewportWidth } from "../../hooks/useViewportWidth";
import howAreYouFeelingDesktop from "../../assets/pageAssets/home/howAreYouFeelingDesktop.png";
import howAreYouFeelingMobile from "../../assets/pageAssets/home/howAreYouFeelingMobile.png";
import {
  TAG_LINE,
  VIEW_DEMO,
  CONNECT_WITH_SPOTIFY,
  DONT_HAVE_A_SPOTIFY_ACCOUNT,
} from "../../text";
import "./HomePage.css";
import { useShowDisabledButtonTooltip } from "../../hooks/useShowDisabledButtonTooltip";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isMobile } = useViewportWidth();
  const {
    REACT_APP_SPOTIFY_AUTHORIZE_URL: spotifyURL,
    REACT_APP_SPOTIFY_CLIENT_ID: cliendID,
    REACT_APP_SPOTIFY_REDIECT_URI: redirectURI,
    REACT_APP_SPOTIFY_SCOPES: spotifyScopes,
  }: any = process.env;

  const handleSpotifyLogin = (): void => {
    window.location.href = `${spotifyURL}?client_id=${cliendID}&scope=${encodeURIComponent(
      spotifyScopes,
    )}&redirect_uri=${redirectURI}/redirect&response_type=token&show_dialog=true`;
  };

  useShowDisabledButtonTooltip("spotify-button");

  const handleDemoLogin = (): void => {
    dispatch(setDemoStatus(true));
    navigate("/analyzing");
  };

  return (
    <main className="page-content">
      {isMobile ? (
        <img
          className="home-image"
          src={howAreYouFeelingMobile}
          alt="How are you feeling?"
        />
      ) : (
        <img
          className="home-image"
          src={howAreYouFeelingDesktop}
          alt="How are you feeling?"
        />
      )}
      <section className="home-content">
        <h1>{TAG_LINE}</h1>
        <button
          disabled
          className="spotify-login-button tooltip-button"
          onClick={handleSpotifyLogin}
          id="spotify-button"
        >
          {CONNECT_WITH_SPOTIFY}
          <div className="tooltip">
            Sorry, Spotify has recently deprecated parts of their API that were
            used in this project. Please try the demo below instead.
          </div>
        </button>
        <h2>{DONT_HAVE_A_SPOTIFY_ACCOUNT}</h2>
        <button className="demo-login-button" onClick={handleDemoLogin}>
          {VIEW_DEMO}
        </button>
      </section>
    </main>
  );
};

export default HomePage;
