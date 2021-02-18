import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Navbar />
                <div className="tan d-flex justify-content-center align-items-center content-body text-center content-body">
                    <div className="container flex-fill tan">
                        <h1 className="bold about-header">About</h1>
                        <h3>Your mood is predicted using track analytics from the Spotify API.</h3>
                        
                        <h1 className="bold about-header mt-5">Privacy</h1>
                        <h3>Your account data remains completely private and cannot be viewed, shared, or saved by anyone. You can view the complete Spotify privacy policy <a className="custom-link" href="https://www.spotify.com/us/legal/privacy-policy/">here</a>.</h3>
                        
                        <h1 className="bold about-header mt-5">Development</h1>
                        <h3>{`This project was built using `}
                            <a className="custom-link" href="https://reactjs.org/">React</a>
                            {', '}
                            <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap 5</a>
                            {', '}
                            <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">OAuth2 Authorization</a>
                            {', and the '}
                            <a className="custom-link" href="https://developer.spotify.com/documentation/web-api/">Spotify Web API </a>
                            and is currently hosted with <a className="custom-link" href="https://vercel.com/">Vercel</a>.
                        </h3>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default About;