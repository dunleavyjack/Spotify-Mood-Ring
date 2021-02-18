import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Navbar />
                <div className="tan d-flex justify-content-center align-items-center content-body text-center content-body">
                    <div className="container flex-fill tan">
                        <h1 className="bold about-header">Overview &#127925;</h1>
                        <h3>Your mood is determined by examining key analytics (mood, tempo, acousticness, etc) from your music and creating an average 'feeling'.</h3>

                        <h1 className="bold about-header mt-3">Privacy &#128274;</h1>
                        <h3>Your account data cannot be viewed, shared, or saved by anyone. You can view the complete Spotify privacy policy <a className="custom-link" href="https://www.spotify.com/us/legal/privacy-policy/">here</a>.</h3>
                        
                        <h1 className="bold about-header mt-3">Development &#x1F468;&#x200D;&#x1F4BB;</h1>
                        <h3>{`This project was built using `}
                            <a className="custom-link" href="https://reactjs.org/">React</a>
                            {', '}
                            <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap 5</a>
                            {', '}
                            <a className="custom-link" href="https://developer.spotify.com/documentation/general/guides/authorization-guide/">OAuth2 Authorization</a>
                            {', and the '}
                            <a className="custom-link" href="https://developer.spotify.com/documentation/web-api/">Spotify Web API </a>
                            and is currently hosted with <a className="custom-link" href="https://vercel.com/">Vercel</a>. It built by me, <a className="custom-link"href="https://github.com/dunleavyjack">Jack</a>, in Feb 2021.
                        </h3>

                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default About;