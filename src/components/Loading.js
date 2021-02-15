import React from 'react'

const Loading = () => {
    return (
        <div class="d-flex justify-content-center align-items-center vh-100 text-center">
            <div>
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


