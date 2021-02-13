import React from 'react'

const Loading = () => {
    return(
        <div>
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            <h2>Hey, Spotify...</h2>
            <h3>Connecting just takes a sec.</h3>
        </div>
    )
}

export default Loading;