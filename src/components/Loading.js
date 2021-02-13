import React from 'react'

const Loading = () => {
    return (
        <div className="container bold h-100 text-center">
            <div className="row h-100 justify-content-center align-items-center">
                <div className="spinner-border pinkish" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <h2>Hey, Spotify<span className="pinkish">...</span></h2>
                <h3>Connecting just takes a sec.</h3>
            </div>
        </div>
    )
}

export default Loading;


