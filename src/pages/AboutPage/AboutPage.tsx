import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import howMoodringWasBuilt from '../../assets/pageAssets/how-built.svg';
import privacyHeader from '../../assets/pageAssets/privacy-header.svg';
import privacyFooter from '../../assets/pageAssets/privacy-bottom.svg';
import jack from '../../assets/pageAssets/jack-name.svg';
import jackURL from '../../assets/pageAssets/jack-profile.svg';
import CreatorProfile from '../../components/CreatorProfile/CreatorProfile';
import jeonghyeURL from '../../assets/pageAssets/jeonghye-profile.svg';
import jeonghye from '../../assets/pageAssets/jeonghye-name.svg';
import linkedin from '../../assets/pageAssets/linkedin.svg';
import github from '../../assets/pageAssets/github.svg';
import medium from '../../assets/pageAssets/medium.svg';
import aboutUs from '../../assets/pageAssets/about-us.svg';
import aboutMoodRing from '../../assets/pageAssets/about-moodring.svg';
import './AboutPage.css';
import { Links } from '../../types';
import {
    MOOD_RING_PRIMARY_DESCRIPTION,
    MOOD_RING_SECONDARY_DESCRIPTION,
} from '../../text';

const jackLinks: Links[] = [
    {
        href: 'https://www.linkedin.com/in/jackdunleavy',
        img: linkedin,
    },
    {
        href: 'https://medium.com/@jackdunleavy',
        img: medium,
    },
    {
        href: 'https://github.com/dunleavyjack',
        img: github,
    },
];

const jeonghyeLinks: Links[] = [
    {
        href: 'https://www.linkedin.com/in/jeonghye/',
        img: linkedin,
    },
];

const AboutPage: React.FC = () => {
    return (
        <main className="page-content scrollable about-nav">
            <Navbar isFullscreen={true} />

            {/* About Moodring */}
            <section className="about-section">
                <img
                    alt="About Moodring"
                    src={aboutMoodRing}
                    className="svg-header top"
                />
                <h2 className="about-text">
                    {MOOD_RING_PRIMARY_DESCRIPTION}
                    <br />
                    <br />
                    {MOOD_RING_SECONDARY_DESCRIPTION}
                </h2>
            </section>

            {/* About us */}
            <section className="about-section">
                <img alt="About Us" src={aboutUs} className="svg-header top" />
                <div className="profile-grid">
                    <CreatorProfile
                        nameImg={jack}
                        profileImg={jackURL}
                        title="Developer"
                        links={jackLinks}
                    />
                    <CreatorProfile
                        nameImg={jeonghye}
                        profileImg={jeonghyeURL}
                        title="Designer"
                        links={jeonghyeLinks}
                    />
                </div>
            </section>

            {/* How Moodring Was Built */}
            <section className="about-section">
                <img
                    alt="How Moodring was built"
                    src={howMoodringWasBuilt}
                    className="svg-header top"
                />
                <h2 className="about-text">
                    {'This project was written in TypeScript and built with '}
                    <a className="custom-link" href="https://reactjs.org/">
                        React
                    </a>
                    {', '}
                    <a className="custom-link" href="https://redux.js.org/">
                        Redux
                    </a>
                    ,{' '}
                    <a className="custom-link" href="https://tonejs.github.io/">
                        Tone.js
                    </a>{' '}
                    (for the playable synth) and a{' '}
                    <a
                        className="custom-link"
                        href="https://nestjs.com/Nest.js"
                    >
                        Nest.js backend
                    </a>
                    {' for server side calls to '}
                    <a
                        className="custom-link"
                        href="https://developer.spotify.com/documentation/web-api/"
                    >
                        the Spotify Web API
                    </a>{' '}
                    for song data and OAuth2.
                    <br />
                    <br />
                    Both the UI and backend are hosted with Vercel and you can
                    view the full
                    <a
                        className="custom-link"
                        href="https://github.com/dunleavyjack/moodring.me"
                    >
                        {' '}
                        UI code{' '}
                    </a>
                    {' and '}{' '}
                    <a
                        className="custom-link"
                        href="https://github.com/dunleavyjack/moodring.me-backend"
                    >
                        backend code
                    </a>{' '}
                    on GitHub.
                    <br />
                    <br />
                    {'Jeonghye used '}
                    <a
                        className="custom-link"
                        href="https://www.figma.com/design/"
                    >
                        Figma
                    </a>
                    {
                        ' for the amazing design including all the incredible icons, images, and text.'
                    }
                    <br />
                    <br />
                    An earlier version (written a year ago in JavaScript) can
                    still be viewed here{' '}
                    <a
                        className="custom-link"
                        href="https://moodring.vercel.app/"
                    >
                        here
                    </a>
                    .
                </h2>
            </section>

            {/* Privacy */}
            <section className="about-section">
                <img
                    alt="Privacy header"
                    src={privacyHeader}
                    className="svg-header top"
                />
                <h2 className="about-text">
                    The complete Spotify privacy policy can be viewed{' '}
                    <a
                        className="custom-link"
                        href="https://www.spotify.com/us/legal/privacy-policy/"
                    >
                        here
                    </a>
                    , which includes approved third-party projects like this
                    one.
                </h2>
                <img
                    alt="Privacy footer"
                    src={privacyFooter}
                    className="svg-header bottom"
                />
            </section>

            <section className="about-section">
                <h2 className="about-text">Mood Ring | Atlanta 2022 :)</h2>
            </section>
        </main>
    );
};

export default AboutPage;
