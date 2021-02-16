import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Navbar />
                <div className="tan d-flex justify-content-center align-items-center content-body text-center content-body">
                    <div className="container flex-fill tan">
                        <h3 className="bold">Hi.</h3>
                        <h3 className="bold">{`This project was built using `}
                            <a href="https://reactjs.org/">React</a>
                            {', '}
                            <a href="https://getbootstrap.com/docs/5.0/getting-started/introduction/">Bootstrap v5.0</a>
                            {', and the '}
                            <a href="https://developer.spotify.com/documentation/web-api/">Spotify Web API</a>
                            {` . Although we use data provided by Spotify, we are not affiliated with them in any way.`}
                        </h3>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default About;