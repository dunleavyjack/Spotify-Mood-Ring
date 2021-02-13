import React from 'react'

const MoodDisplay = ({ songs, profile: {
    display_name,
    images

} }) => {
    console.log(songs)
    return (
        <div className="container d-flex justify-content-center">
            <div className="circular--portrait">
                <img src={images[0].url}/>
            </div>
            <div>
                <h1>Hi, {display_name}</h1>
            </div>
        </div>
    )
}

export default MoodDisplay;