import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
    return (
        <div>
            <Navbar />
                <div className="container h-100 d-flex justify-content-center align-items-center">
                    <p>Hi. This project was built using React, Bootstrap 5.0 and the Spotify API. Although we use data provided by Spotify, we are not affiliated with them in any way.</p>
                </div>
            <Footer />
        </div>
    )
}

export default About;