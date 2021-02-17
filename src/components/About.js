import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Navbar />
                <div className="tan d-flex justify-content-center align-items-center content-body text-center content-body">
                    <div className="container flex-fill tan">
                        <h1 className="bold">About</h1>
                        <h3 className="bold">{`Hi! This project was built using `}
                            <a className="custom-link" href="https://reactjs.org/">React</a>
                            {', '}
                            <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap 5</a>
                            {', '}
                            <a className="custom-link" href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">OAuth2 Authorization</a>
                            {', and the '}
                            <a className="custom-link" href="https://developer.spotify.com/documentation/web-api/">Spotify Web API</a>
                            {`. `} This project is currently hosted using Vercel.
                        </h3>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default About;