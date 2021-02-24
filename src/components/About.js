import React from 'react'
import Navbar from './Navbar'

const About = () => {
    return (
        <div>
            <Navbar />
            <div className="black-body d-flex justify-content-center align-items-center content-body text-center content-body">
                <div className="container flex-fill mt-5">
                    <h1 className="bold about-header mt-5 black-body tan-font">About</h1>
                    
                    <h5 className="black-body whiteish">
                        This project was built with
                        <a className="custom-link" href="https://reactjs.org/"> React</a>,
                        <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"> Bootstrap 5</a>,
                        <a className="custom-link" href="https://developer.spotify.com/documentation/web-api/"> the Spotify Web API </a> and
                        designed in 
                        <a className="custom-link" href="https://www.figma.com/design/"> Figma</a>.
                        Currently, it is hosted with
                        <a className="custom-link" href="https://vercel.com/"> Vercel </a> and the repo is available
                        <a className="custom-link" href="https://github.com/dunleavyjack/Spotify-Mood-Ring"> here</a> on GitHub for anyone who wants to take a look.
                    </h5>
                    
                    <h1 className="bold about-header mt-5 black-body tan-font">The Mood Detector</h1>
                    <h5 className="black-body whiteish">Your mood is determined based on different analytics (tempo, energy, acousticness, etc.) from each song. An average is found from your recent music which is compared with the levels of an 'average listener'. That data is matched with one of over thirty moods and that's what you see. Moods are strange and ineffable, but hopefully it connected with you :)</h5>
                    
                    <h1 className="bold about-header mt-5 black-body tan-font">Privacy</h1>
                    <h5 className="mb-5 black-body whiteish">For obvious reasons, your account data cannot be viewed, shared, or saved by anyone. You can view the complete Spotify privacy policy <a className="custom-link" href="https://www.spotify.com/us/legal/privacy-policy/">here</a>, which also covers approved third-party projects like this one. </h5>
                </div>
            </div>
        </div>
    )
}

export default About;