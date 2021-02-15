import React from 'react'
import '../stylesheet.css'

const Loading = () => {
    return (
        <div class="tan d-flex justify-content-center align-items-center text-center content-body">
            <div>
                <div className="spinner-border pinkish" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h2>Hey, Spotify<span className="pinkish tan">...</span></h2>
                <h3>Connecting just takes a sec.</h3>
            </div>
        </div>
    )
}

export default Loading;


