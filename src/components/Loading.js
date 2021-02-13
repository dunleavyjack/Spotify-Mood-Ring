import React from 'react'

const Loading = () => {
    return (
        <div className="container h-100 d-flex justify-content-center align-items-center">
            <div className="spinner-border pinkish" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <hr/>
            <h2>Hey, Spotify<span className="pinkish">...</span></h2>
            <hr/>
            <h3>Connecting just takes a sec.</h3>

        </div>
    )
}

export default Loading;


