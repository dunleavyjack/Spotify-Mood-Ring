import React from 'react'

const MoodDisplay = ({ songs, profile: {
    display_name,
    images

} }) => {
    console.log(songs)
    return (
        <div className="container">
            <h1>Hi, {display_name}</h1>
            <div class="circular--portrait">
                <img src={images[0].url}/>
            </div>
        </div>
    )
}

export default MoodDisplay;